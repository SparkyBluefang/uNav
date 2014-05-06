/*
 * ***** BEGIN LICENSE BLOCK *****
 * 
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 * 
 * Copyright (C) 2014 Matthew Turnbull <sparky@bluefang-logic.com>. All Rights Reserved.
 * 
 * ***** END LICENSE BLOCK *****
*/

window.addEventListener("load", function buildMicroNav()
{
	window.removeEventListener("load", buildMicroNav, false);

	let urlbarWrapper = document.getElementById("urlbar-wrapper");
	let forwardButton = document.getElementById("forward-button");
	let reloadButton = document.getElementById("micronav-reload-button");
	let stopButton = document.getElementById("micronav-stop-button");

	urlbarWrapper.insertBefore(stopButton, forwardButton.nextSibling);
	urlbarWrapper.insertBefore(reloadButton, forwardButton.nextSibling);

	CombinedStopReload.reload = reloadButton;
	CombinedStopReload.stop = stopButton;
	stopButton.addEventListener("click", CombinedStopReload, false);
}, false);

