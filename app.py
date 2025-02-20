from flask import Flask, render_template, request
import torch
from diffusers import StableDiffusionPipeline

# Initialize Flask app
app = Flask(__name__)

# Check CUDA availability
device = "cpu"  # Force using CPU

# Load Stable Diffusion model
pipe = StableDiffusionPipeline.from_pretrained("runwayml/stable-diffusion-v1-5")
pipe.to("cpu")  # Use GPU if available, otherwise use CPU

@app.route("/", methods=["GET", "POST"])
def index():
    image_path = None  # Default to no image
    
    if request.method == "POST":
        prompt = request.form.get("prompt")  # Get user input
        print(f"Generating image for: {prompt}")

        if prompt:
            # Generate image
            image = pipe(prompt).images[0]
            image_path = "static/generated/output.png"
            image.save(image_path)

    return render_template("index.html", image_path=image_path)

if __name__ == "__main__":
    app.run(debug=True)
 