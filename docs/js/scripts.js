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