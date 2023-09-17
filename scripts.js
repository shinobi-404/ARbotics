// Allowing the plane to be draggable
let plane = document.querySelector('.draggable');
let isDown = false;
let startX, startY, startZ;

plane.addEventListener('mousedown', function(evt) {
    isDown = true;
    startX = evt.detail.intersection.point.x;
    startY = evt.detail.intersection.point.y;
    startZ = evt.detail.intersection.point.z;
});

plane.addEventListener('mouseup', function() {
    isDown = false;
});

plane.addEventListener('mousemove', function(evt) {
    if (isDown) {
        let deltaX = evt.detail.intersection.point.x - startX;
        let deltaY = evt.detail.intersection.point.y - startY;
        let deltaZ = evt.detail.intersection.point.z - startZ;
        plane.setAttribute('position', {x: deltaX, y: deltaY + 0.5, z: deltaZ});
    }
});
