// DOM এলিমেন্ট সিলেক্ট করা
const redRange = document.getElementById('inputRED');
const greenRange = document.getElementById('inputGREEN');
const blueRange = document.getElementById('inputBLUE');

const redRgbInput = document.getElementById('inputREDrgb');
const greenRgbInput = document.getElementById('inputGREENrgb');
const blueRgbInput = document.getElementById('inputBLUErgb');

const redHexInput = document.getElementById('inputREDhex');
const greenHexInput = document.getElementById('inputGREENhex');
const blueHexInput = document.getElementById('inputBLUEhex');

const outputRgb = document.getElementById('outputRGB');
const outputHex = document.getElementById('outputHEX');

// প্রাথমিক ভ্যালু সেট করা
function initializeValues() {
    redRange.value = 171;
    greenRange.value = 205;
    blueRange.value = 239;

    updateInputs(redRange);
    updateInputs(greenRange);
    updateInputs(blueRange);

    updateOutput();
}

// রেঞ্জ থেকে ইনপুট আপডেট
function updateInputs(rangeElement) {
    const value = rangeElement.value;
    const hexValue = Number(value).toString(16).padStart(2, '0').toUpperCase();

    if (rangeElement.id === 'inputRED') {
        redRgbInput.value = value;
        redHexInput.value = hexValue;
    } else if (rangeElement.id === 'inputGREEN') {
        greenRgbInput.value = value;
        greenHexInput.value = hexValue;
    } else if (rangeElement.id === 'inputBLUE') {
        blueRgbInput.value = value;
        blueHexInput.value = hexValue;
    }
}

// RGB এবং HEX আউটপুট আপডেট
function updateOutput() {
    const red = redRange.value;
    const green = greenRange.value;
    const blue = blueRange.value;

    // RGB আউটপুট
    outputRgb.value = `rgb(${red}, ${green}, ${blue})`;

    // HEX আউটপুট
    const hexRed = Number(red).toString(16).padStart(2, '0');
    const hexGreen = Number(green).toString(16).padStart(2, '0');
    const hexBlue = Number(blue).toString(16).padStart(2, '0');
    outputHex.value = `#${hexRed}${hexGreen}${hexBlue}`.toUpperCase();

    // ব্যাকগ্রাউন্ড কালার আপডেট
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

// ইভেন্ট লিসেনার যোগ করা
function setupEventListeners() {
    redRange.addEventListener('input', function() {
        updateInputs(this);
        updateOutput();
    });

    greenRange.addEventListener('input', function() {
        updateInputs(this);
        updateOutput();
    });

    blueRange.addEventListener('input', function() {
        updateInputs(this);
        updateOutput();
    });

    // সংখ্যা ইনপুটের জন্য ইভেন্ট লিসেনার
    [redRgbInput, greenRgbInput, blueRgbInput].forEach(input => {
        input.addEventListener('input', function() {
            const value = Math.min(255, Math.max(0, this.value || 0));
            const rangeElement = document.getElementById(this.id.replace('rgb', ''));
            rangeElement.value = value;
            updateInputs(rangeElement);
            updateOutput();
        });
    });

    // HEX ইনপুটের জন্য ইভেন্ট লিসেনার (সংশোধিত)
    [redHexInput, greenHexInput, blueHexInput].forEach(input => {
        input.addEventListener('input', function() {
            // শুধুমাত্র বৈধ HEX ক্যারেক্টার অনুমোদন (0-9, A-F)
            this.value = this.value.replace(/[^0-9A-Fa-f]/g, '').toUpperCase();

            if (this.value.length > 2) {
                this.value = this.value.substring(0, 2);
            }

            if (this.value.length === 2) {
                const decimalValue = parseInt(this.value, 16);
                if (!isNaN(decimalValue)) {
                    const rangeElement = document.getElementById(this.id.replace('hex', ''));
                    rangeElement.value = decimalValue;
                    updateInputs(rangeElement);
                    updateOutput();
                }
            }
        });

        // HEX ইনপুট ফোকাস হারালে ভ্যালিডেশন
        input.addEventListener('blur', function() {
            if (this.value.length === 1) {
                this.value = this.value.padStart(2, '0');
                const decimalValue = parseInt(this.value, 16);
                if (!isNaN(decimalValue)) {
                    const rangeElement = document.getElementById(this.id.replace('hex', ''));
                    rangeElement.value = decimalValue;
                    updateInputs(rangeElement);
                    updateOutput();
                }
            }
        });
    });
}

// পেজ লোড হলে প্রাথমিক ভ্যালু সেট করা
window.addEventListener('load', function() {
    initializeValues();
    setupEventListeners();
});
