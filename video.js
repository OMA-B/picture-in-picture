// grabbing elements to display video on button click
const video = document.querySelector('.video');
const startBtn = document.querySelector('.start');

// selecting what to stream in video
const selectMainStream = async () => {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        video.srcObject = mediaStream;
        video.onloadedmetadata = () => {
            video.play();
        }
    } catch (error) {
        // catch error encountered
        console.log('whoops, there\'s an error here:', error);
    }
}

// displaying picture in picture mode on button click
startBtn.addEventListener('click', async () => {
    // disabled button to await response of picture in picture
    startBtn.disabled = true;
    // fetch response of picture in picture
    await video.requestPictureInPicture();
    // enable button after response gotten
    startBtn.disabled = false;
});

// On Load
selectMainStream();