let spinCount = 0;

function spinWheel() {
    const wheel = document.getElementById('wheel');
    const spinButton = document.querySelector('.spin-button');
    const modal = document.getElementById('winModal');
    const retryModal = document.getElementById('retryModal');

    spinButton.disabled = true;

    // Reset wheel before spinning again
    wheel.style.transition = 'none';
    wheel.style.transform = 'rotate(0deg)';

    setTimeout(() => {
        const rotations = 6;
        let targetAngle;

        if (spinCount === 0) {
            targetAngle = 320; // First spin stop angle
        } else {
            targetAngle = 100; // Second spin stop angle
        }

        const totalDegrees = (rotations * 360) + targetAngle;

        wheel.style.transition = 'transform 4s ease-out';
        wheel.style.transform = `rotate(${totalDegrees}deg)`;

        setTimeout(() => {
            spinButton.disabled = false;

            if (spinCount === 0) {
                retryModal.style.display = 'flex';
                spinCount++;
            } else {
                modal.style.display = 'flex';
                spinCount = 0; // Reset for next cycle
            }
        }, 4000);
    }, 50);
}

// Close final modal
document.getElementById('winModal').addEventListener('click', function(e) {
    if (e.target === this) {
        this.style.display = 'none';
    }
});

// Close retry modal
document.getElementById('retryModal').addEventListener('click', function(e) {
    if (e.target === this) {
        this.style.display = 'none';
    }
});

function retrySpin() {
    document.getElementById('retryModal').style.display = 'none';
}
