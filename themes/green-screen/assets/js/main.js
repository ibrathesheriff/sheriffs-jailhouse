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

function prepareBashCommand(commandElement) {
    if (commandElement.classList.contains("blink-animation")) {
        commandElement.classList.remove("blink-animation");
        commandElement.classList.add("sheriff-white-text");
    }
}

const commandOptions = ["ls", "cat"];
function checkCommand(commandEntered) {
    // commands must contain 2 parts
    const commandParts = commandEntered.split(" ");
    if (commandParts.length != 2) {
        return false;
    }

    let found = false;
    for (let i = 0; i < commandOptions.length; i++) {
        if (commandParts.includes(commandOptions[i])) {
            found = true;
            break;
        }
    }
    // commands must use a valid supported bash option
    if (!found) {
        return false;
    }

    return true;
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
    // handle entry of instructions
    const bashCommandContainer = document.getElementById("bash-command");
    let cursorMode = true;
    document.addEventListener("keydown", function(event) {
        const keyPressed = event.key;
        prepareBashCommand(bashCommandContainer);
        if (cursorMode) {
            cursorMode = false;
            bashCommandContainer.innerHTML = "";
        }
        const currentText = bashCommandContainer.innerHTML;
        if (keyPressed == "Enter") {
            if (checkCommand(currentText)) {
                const temp = currentText.split(" ");
                const commandPart = temp[0];
                let urlPart = temp[1];
                if (commandPart === "cat" && urlPart.endsWith(".md")) {
                    // remove the .md part for notes and posts
                    urlPart = urlPart.substring(0, urlPart.length - 3);
                }
                if (!urlPart.startsWith("/")) {
                    urlPart = "/" + urlPart;
                }
                // navigate to the requested page
                window.location.href = urlPart;
            } else {
                bashCommandContainer.innerHTML = `bash: ${currentText}: command not found`;
            }
        } else if (keyPressed == "Backspace") {
            if (currentText.length > 0) {
                bashCommandContainer.innerHTML = currentText.substring(0, currentText.length - 1);
            }
        } else {
            bashCommandContainer.innerHTML = currentText + keyPressed;
        }
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

