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

class CommandCheckStatus {
    #status;
    #errorMessage;
    constructor(status, errorMessage) {
        this.#status = status;
        this.#errorMessage = errorMessage;
    }

    isValid() {
        return this.#status;
    }

    getErrorMessage() {
        return this.#errorMessage;
    }
}

const commandOptions = ["ls", "cat"];
function checkCommand(commandEntered) {
    // commands must contain 2 parts
    const commandParts = commandEntered.split(" ");
    const standardError = `bash: ${commandEntered}: command not found`;
    if (commandParts.length != 2) {
        return new CommandCheckStatus(false, standardError);
    }

    // commands must use a valid supported bash option
    if (!commandOptions.includes(commandParts[0])) {
        return new CommandCheckStatus(false, standardError);
    }

    let pathSection = commandParts[1];
    if (pathSection.startsWith("/")) {
        pathSection = pathSection.substring(1);
    }

    if (pathSection.endsWith("/")) {
        pathSection = pathSection.substring(0, pathSection.length - 1);
    }

    const catError = `cat: ${commandParts[1]}: Is a directory`;
    const pathParts = pathSection.split("/");
    if (commandParts[0] == "cat" && pathParts.length == 1) {
        return new CommandCheckStatus(false, catError);
    }

    return new CommandCheckStatus(true, null);
}

function storeBashCommand(command) {
    if (localStorage.getItem("commandList") === null) {
        let commandList = [command];
        localStorage.setItem("commandList", JSON.stringify(commandList));
        const totalItems = 1;
        localStorage.setItem("currentCommand", totalItems.toString());
    } else {
        let arrayString = localStorage.getItem("commandList");
        const totalItems = parseInt(localStorage.getItem("currentCommand")) + 1;
        let commandArray = JSON.parse(arrayString);
        // add the new command
        commandArray.push(command);
        let storageString = JSON.stringify(commandArray);
        localStorage.setItem("commandList", storageString);
        localStorage.setItem("currentCommand", totalItems.toString());
    }
}

function logStoredCommands() {
    Object.keys(localStorage).forEach(function (key) {
        console.log(key, ":", localStorage.getItem(key));
    });
}

function clearLocalStorage() {
    localStorage.clear();
}

function getTheCurrentBashCommand(keyEntered) {
    let arrayString = localStorage.getItem("commandList");
    if (arrayString === null) {
        return null;
    }
    let commandArray = JSON.parse(arrayString);
    const maxCommand = commandArray.length - 1;
    let nextCommand = parseInt(localStorage.getItem("currentCommand"));
    if (keyEntered == "ArrowUp") {
        nextCommand--;
    } else {
        nextCommand++;
    }

    if (nextCommand < 0) {
        nextCommand = maxCommand;
    } else if (nextCommand > maxCommand) {
        nextCommand = 0;
    }
    localStorage.setItem("currentCommand", nextCommand.toString());
    const previousCommand = commandArray[nextCommand];
    return previousCommand;
}

function setMute() {
    localStorage.setItem("mute", "true");
}

function setUnmute() {
    localStorage.setItem("mute", "false");
}

function isMute() {
    let muteStatus = localStorage.getItem("mute");
    if (muteStatus === null) {
        localStorage.setItem("mute", "false");
        return false;
    }
    return muteStatus == "true";
}

function playAudio(audioFile) {
    try {
        if (!isMute()) {
            let audioObj = new Audio(audioFile);
            audioObj.play();
        }
    } catch (err) {
        console.error(`Failed to play ${audioFile} audio: `, err);
    }
}

const commandKeysToIgnore = ["Control", "Shift", "ArrowLeft", "ArrowRight"];
function ignoreCommandKey(keyEntered) {
    return commandKeysToIgnore.includes(keyEntered);
}

const galleryArrows = ["ArrowLeft", "ArrowRight"];
function galleryArrowPressed(keyEntered) {
    return galleryArrows.includes(keyEntered);
}

function updateImageListDisplay(keyEntered, index, imagePaths, headings, displayImage,
    imageHeading) {
    if (keyEntered == "ArrowLeft") {
        index--;
    } else {
        index++;
    }
    // wrap around if going out of bounds
    if (index < 0) {
        index = imagePaths.length - 1;
    } else if (index >= imagePaths.length) {
        index = 0;
    }
    displayImage.src = imagePaths[index];
    if (imageHeading !== null) {
        imageHeading.innerHTML = headings[index];
    }
    return index;
}

function addTargetBlankToAnchors() {
    const markdownBlocks = document.getElementsByClassName("markdown-container");
    if (markdownBlocks.length == 0) {
        // no markdown block to process
        return;
    }

    for (let mb = 0; mb < markdownBlocks.length; mb++) {
        // process the markdown block children
        const markdownElements = markdownBlocks[mb].children;
        for (let i = 0; i < markdownElements.length; i++) {
            if (markdownElements[i].tagName === 'P') {
                let paragraphElements = markdownElements[i].children;
                for (let j = 0; j < paragraphElements.length; j++) {
                    // search for anchor tags in the paragraphs
                    if (paragraphElements[j].tagName === 'A') {
                        paragraphElements[j].setAttribute("target", "_blank");
                    }
                }
            }
        }
    }
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
    // handle image list
    const imageList = document.getElementById("image-list");
    const imageListDisplay = document.getElementById("image-list-display");
    const imageHeading = document.getElementById("image-heading");
    const arrowInstructions = document.getElementById("arrow-instructions");
    let arrowInstructionsStatus = true;
    const imageListPresent = imageList !== null;
    let imageListIndex = 0;
    let imageListImagePaths = [];
    // image headings are optional
    let imageListHeadings = [];
    if (imageListPresent) {
        const imageItems = imageList.getElementsByTagName("li");
        for (let i = 0; i < imageItems.length; i++) {
            const tempParts = imageItems[i].innerHTML.split(" - ");
            imageListImagePaths.push(tempParts[0]);
            imageListHeadings.push(tempParts[1])
        }

        const imageListLeftArrow = document.getElementById("image-list-left-arrow");
        const imageListRightArrow = document.getElementById("image-list-right-arrow");
        // image arrows are option
        if (imageListLeftArrow !== null) {
            imageListLeftArrow.addEventListener("click", function () {
                imageListIndex = updateImageListDisplay("ArrowLeft", imageListIndex,
                    imageListImagePaths, imageListHeadings, imageListDisplay,
                    imageHeading);
            });

            imageListRightArrow.addEventListener("click", function () {
                imageListIndex = updateImageListDisplay("ArrowRight", imageListIndex,
                    imageListImagePaths, imageListHeadings, imageListDisplay,
                    imageHeading);
            });
        }
    }

    // handle markdown additional rendering
    addTargetBlankToAnchors();

    // handle entry of instructions
    const bashCommandContainer = document.getElementById("bash-command");
    const terminalBellAudio = "/audio/bicycle-bell.mp3";
    let cursorMode = true;
    document.addEventListener("keydown", function (event) {
        const keyPressed = event.key;
        prepareBashCommand(bashCommandContainer);
        if (cursorMode) {
            cursorMode = false;
            bashCommandContainer.innerHTML = "";
        }
        const currentText = bashCommandContainer.innerHTML;
        if (keyPressed == "Enter") {
            if (currentText == "mute" || currentText == "unmute") {
                if (currentText == "mute") {
                    setMute();
                } else {
                    setUnmute();
                    playAudio(terminalBellAudio);
                }
                bashCommandContainer.innerHTML = "";
                return;
            } else if (currentText == "history -c") {
                clearLocalStorage();
                bashCommandContainer.innerHTML = "";
                return;
            }

            const commandCheckStatus = checkCommand(currentText);
            if (commandCheckStatus.isValid()) {
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
                // cache successful command entries
                storeBashCommand(currentText);
                // navigate to the requested page
                window.location.href = urlPart;
            } else {
                bashCommandContainer.innerHTML = commandCheckStatus.getErrorMessage();
            }
        } else if (imageListPresent && galleryArrowPressed(keyPressed)) {
            imageListIndex = updateImageListDisplay(keyPressed, imageListIndex,
                imageListImagePaths, imageListHeadings, imageListDisplay,
                imageHeading);
            if (arrowInstructionsStatus && arrowInstructions !== null) {
                arrowInstructions.style.display = "none";
                arrowInstructionsStatus = false;
            }
        } else if (keyPressed == "ArrowUp" || keyPressed == "ArrowDown") {
            const previousExecutedCommand = getTheCurrentBashCommand(keyPressed);
            if (previousExecutedCommand !== null) {
                bashCommandContainer.innerHTML = previousExecutedCommand;
            } else {
                playAudio(terminalBellAudio);
            }
        } else if (keyPressed == "Backspace") {
            if (currentText.length > 0) {
                bashCommandContainer.innerHTML = currentText.substring(0, currentText.length - 1);
            }
        } else if (ignoreCommandKey(keyPressed)) {
            // do nothing
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
        let numSections = fullProgressBarLength / 2;
        if (window.innerWidth <= 768) {
            // reduce the section size for smaller devices
            numSections = fullProgressBarLength;
        }
        let lastTime = 0;
        let currentSheriffIs = 0;

        const sheriffIsList = ["Code Educator", "Dev", "Tutor", "Web Developer", "Pythoneer",
            "Problem-Solver", "Java", "C", "NASM", "HTML/CSS", "JavaScript", "Sass", "Python",
            "Numpy", "Flask", "Tornado", "Vue.js", "MySQL", "MariaDB", "SQLAlchemy", "Maven",
            "Git", "Bash", "Twilio", "Pythonanywhere", "DigitalOcean"];

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

