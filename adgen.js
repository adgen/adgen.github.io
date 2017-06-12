window.onload = () => {


    const adWrapper = document.getElementById("adWrapper");
    adWrapper.style.visibility = "hidden";
    const selector = document.getElementById("file");
    selector.style.visibility = "hidden";
    const selectButton = document.getElementById("select");
    selectButton.addEventListener("click", () => {
        selector.click();
    });
    document.getElementById("file").addEventListener("change", () => {
        adWrapper.style.visibility = "visible";
        document.getElementById('button').style.visibility = 'visible';
        document.getElementById('select').style.visibility = 'hidden';
        PreviewImage();
    });

    PreviewImage = () => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(document.getElementById("file").files[0]);
        fileReader.addEventListener('load', function (oFREvent) {
            document.getElementById("srcImage").style.backgroundImage = 'url(' + oFREvent.target.result + ')';
            html2canvas(document.getElementById("adWrapper"), {
                onrendered: (canvas) => {
                    document.getElementById("canvasContainer").appendChild(canvas);
                    document.body.removeChild(adWrapper);
                },
                width: 1920,
                height: 1080
            });

        });

    };

    const button = document.getElementById("button");
    button.addEventListener("click", () => {

        const canvas = document.getElementsByTagName("canvas")[0];

        downloadCanvas = () => {
            canvas.setAttribute("id", "canvas");
            const link = document.createElement("a");
            document.body.appendChild(link);
            link.href = canvas.toDataURL();
            link.download = 'image.png';
            link.click();
        };


        downloadCanvas();

    })
};