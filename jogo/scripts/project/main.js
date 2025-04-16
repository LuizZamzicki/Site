
import AudioManager from "./audioManager.js";

// Audio manager class for handling audio playback.
let audioManager = null;

// References to loaded audio files as global variables
let morte1 = null;
let morte2 = null;
let morte3 = null;
let morte4 = null;

runOnStartup(async runtime =>
{
	// Initialise the audio manager. See AudioManager.js for details.
	audioManager = new AudioManager(runtime);
	
	// During the loading screen, load both sound files as
	// AudioBuffers and the music track all in parallel, so
	// they are ready for immediate playback on startup.
	[morte1, morte2, morte3, morte4] = await Promise.all([
		audioManager.loadSound("morte1.webm"),
		audioManager.loadSound("morte2.webm"),
		audioManager.loadMusic("morte3.webm"),
		audioManager.loadMusic("morte4.webm")
	]);
});

// These functions are called by the button click events.
export function playmorte1()
{
	audioManager.playSound(morte1);
}

export function playmorte2()
{
	audioManager.playSound(morte2);
}

export function playmorte3()
{
	audioManager.playMusic(morte3);
}

export function playmorte4()
{
	audioManager.playMusic(morte4);
}

export function playAleatorio()
{
	const functions = [playmorte1, playmorte2, playmorte3, playmorte4];
	const randomFunction = functions[Math.floor(Math.random() * functions.length)];
	randomFunction();
} 