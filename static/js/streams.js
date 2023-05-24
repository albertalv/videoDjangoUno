const APP_ID = "2bddf6f927c84d86adf363ec3cae0145"
const CHANNEL = "main"
const TOKEN = "007eJxTYIjTPvE5aJFwBTfHIc0qVV+B1IdtyawWGg+aviRK/TsVwqrAYJSUkpJmlmZpZJ5sYZJiYZaYkmZsZpyabJycmGpgaGKaNCEvpSGQkUGLi5OZkQECQXwWhtzEzDwGBgCCPBwv"
let UID;
const client = AgoraRTC.createClient({mode: 'rtc', codec:'vp8'})

let localTracks = []
let remoteUsers = {}
let joinAndDisplayLocalStream = async()=>{
    UID = await client.join(APP_ID, CHANNEL, TOKEN, null)

    localTracks = await AgoraRTC.creMicrophoneAndCameraTracks()
    let player = `<div class = "video.container" id = "user-container-${UID}">
    <div class = "username-wraper"><span class="user-name">My Name</span></div>
    <div class = "video-player" id = "user-${UID}"></div>
    </div> 
    `
    document.getElementById("video-streams").insertAdjacentElement('beforeend', player)
    localTracks[1].play(`user-${UID}`)
    await client,publish([localTracks[0], localTracks[1]])
}

joinAndDisplayLocalStream()