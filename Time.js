setInterval(getTime, 1000);
        function getTime() {
            let currentTime = new Date();
            let destTime = new Date(`${currentTime.getFullYear()}`, "11", "23", "0", "0", "0");
            if (destTime < currentTime)
                destTime.setFullYear(currentTime.getFullYear() + 1);
            
            let age = document.getElementById('age');
            age.innerHTML = `Age : ${destTime.getFullYear()-2001}`;

            let diffTime = destTime.getTime() - currentTime.getTime();
            let hrs = (Math.floor(((diffTime / 1000) / 60) / 60)).toString();
            let mins = (Math.floor((diffTime / 1000) / 60) % 60).toString();
            let secs = ((Math.floor(diffTime / 1000) % 60)).toString();


            let box1 = document.getElementById('box1');
            let box2 = document.getElementById('box2');
            let box3 = document.getElementById('box3');
            let box4 = document.getElementById('box4');
            let box5 = document.getElementById('box5');
            let box6 = document.getElementById('box6');
            let box7 = document.getElementById('box7');
            let box8 = document.getElementById('box8');

            let hrs0 = 0, hrs1 = 0, hrs2 = 0, hrs3 = 0, mins0 = 0, mins1, secs0 = 0, secs1;
            if (hrs.length == 1) {
                hrs3 = hrs[0];
            }
            else if (hrs.length == 2) {
                hrs2 = hrs[0];
                hrs3 = hrs[1];
            }
            else if (hrs.length == 3) {
                hrs1 = hrs[0];
                hrs2 = hrs[1];
                hrs3 = hrs[2];
            }
            else {
                hrs0 = hrs[0];
                hrs1 = hrs[1];
                hrs2 = hrs[2];
                hrs3 = hrs[3];
            }
            if (mins.length == 1) {
                mins1 = mins[0];
            }
            else {
                mins0 = mins[0];
                mins1 = mins[1];
            }
            if (secs.length == 1) {
                secs1 = secs[0];
            }
            else {
                secs0 = secs[0];
                secs1 = secs[1];
            }

            box1.innerHTML = `${hrs0}`;
            box2.innerHTML = `${hrs1}`;
            console.log(hrs.length)
            if (hrs.length <= 3)
                box1.style.display = "none";
            if (hrs.length <= 2)
                box2.style.display = "none";
            box3.innerHTML = `${hrs2}`;
            box4.innerHTML = `${hrs3}`;
            box5.innerHTML = `${mins0}`;
            box6.innerHTML = `${mins1}`;
            box7.innerHTML = `${secs0}`;
            box8.innerHTML = `${secs1}`;
        }