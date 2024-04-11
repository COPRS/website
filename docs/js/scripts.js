/**
 * Copyright 2023 CS Group
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

document.getElementById('githubButton').addEventListener("click", function() {
    document.getElementById("github").hidden = false;
    document.getElementById("sentinel-processor").hidden = true;
    document.getElementById("api").hidden = true;
    window.location.hash = 'github';
    console.log("J'ai appuyé sur le bouton Github RS");
});

document.getElementById("sentinelProcessorButton").addEventListener("click", function() {
    document.getElementById("github").hidden = true;
    document.getElementById("sentinel-processor").hidden = false;
    document.getElementById("api").hidden = true;
    window.location.hash = 'sentinel-processor';
});

document.getElementById("apiButton").addEventListener("click", function() {
    document.getElementById("github").hidden = true;
    document.getElementById("sentinel-processor").hidden = true;
    document.getElementById("api").hidden = false;
    window.location.hash = 'api';
});