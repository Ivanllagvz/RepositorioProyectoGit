var v = document.getElementsByTagName("audio")[0];
            var sound = false;
            var boton = document.getElementById("botonaudio");
                boton.addEventListener("click", function(){
            if (!sound) {
                v.play();
                document.getElementById("imgsonido").setAttribute('src', './play.png');
                sound = true;
            } else {
                v.pause();
                document.getElementById("imgsonido").setAttribute('src', './pause.png');
                sound = false;
            }
            });