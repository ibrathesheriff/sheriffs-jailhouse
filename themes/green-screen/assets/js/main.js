const darkProgressBarUnit = "░";
const lightProgressBarUnit = "▓";

function replaceCharacter(string, index, replacement) {
    return (
        string.slice(0, index) +
        replacement +
        string.slice(index + replacement.length)
    );
}

function incrementProgressBar(currentProgressPosition, progressBar, numSections) {
    let progressBarPos = currentProgressPosition;
    const increment = progressBar.innerHTML.length / numSections;
    for (let i = 0; i < increment; i++) {
        progressBar.innerHTML = replaceCharacter(progressBar.innerHTML, progressBarPos,
            lightProgressBarUnit);

        progressBarPos++;
    }

    return progressBarPos;
}

document.addEventListener("DOMContentLoaded", (event) => {
    // handle the footer
    const displayFooter = document.getElementById("display-footer");
    const expandedFooter = document.getElementById("expanded-footer");
    const expandFooterButton = document.getElementById("expand-footer-button");
    const shrinkFooterButton = document.getElementById("shrink-footer-button");
    expandFooterButton.addEventListener("click", () => {
        displayFooter.style.display = "none";
        expandedFooter.style.display = "flex";
    });
    shrinkFooterButton.addEventListener("click", () => {
        displayFooter.style.display = "block";
        expandedFooter.style.display = "none";
    });
    // handle the progress bar
    const progressBar = document.getElementById("progress-bar");
    if (progressBar !== null) {
        const progressBarInfo = document.getElementById("progress-bar-info");
        progressBar.innerHTML = '░'.repeat((window.innerWidth * 0.40) / 9);
        let progressBarPos = 0;
        const fullProgressBarLength = progressBar.innerHTML.length;
        let numSections = fullProgressBarLength;
        let lastTime = 0;
        let currentSheriffIs = 0;

        const sheriffIsList = ["Code Educator", "Dev", "Tutor", "Web Developer", "Pythoneer",
            "Problem-Solver", "Java", "C", "NASM", "HTML/CSS", "JavaScript", "Python", "Numpy",
            "Flask", "Tornado", "Vue.js", "MySQL", "MariaDB", "SQLAlchemy", "Maven", "Git", "Bash",
            "Twilio", "Pythonanywhere", "DigitalOcean"];

        function step(timeStamp) {
            let deltaTime = timeStamp - lastTime;
            if (deltaTime > 100) {
                progressBarPos = incrementProgressBar(progressBarPos, progressBar, numSections);
                if (progressBarPos < fullProgressBarLength) {
                    progressBarInfo.innerHTML = sheriffIsList[currentSheriffIs];
                    currentSheriffIs += 1
                    if (currentSheriffIs >= sheriffIsList.length) {
                        currentSheriffIs = 0;
                    }
                } else {
                    progressBarInfo.innerHTML = "Welcome to the Sheriff's Jailhouse :)";
                    progressBarInfo.classList.add("text-fade-in-animation");
                }
                lastTime = timeStamp;
            }

            if (progressBarPos < fullProgressBarLength) {
                window.requestAnimationFrame(step);
            } else {
                setTimeout(() => {
                    document.getElementById("progress-bar-block").style.display = "none";
                    document.getElementById("main-content-block").style.display = "block";
                }, "2500");
            }
        }
        window.requestAnimationFrame(step);
    }
});

