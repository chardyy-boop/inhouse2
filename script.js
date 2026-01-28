const questions = [
    {
        question: "The maximum demand of a certain power station in the country is 92 MW. The daily load curve is described as follows: Time (hours: 0-6 6-8 8-12 12-14 14-18 18-22 22-24 Load (M): 48 60 72 60 84 96 48. What is the use factor of a standby equipment rated at 30 MW that takes up all load in excess of 72 MW?",
        options: ["0.60", "0.70", "0.90", "0.50"],
        correct: 0
    },
    {
        question: "A diesel (Otto?) power plant with engine cylinder has a bore of 18 cm and stroke of 40 cm. If the volumetric compression is 1800 cm³, find the engine efficiency in percent.",
        options: ["56.7", "75.34", "53.14", "47.98"],
        correct: 2
    },
    {
        question: "Determine the theoretical power in kW required for the Isothermal compression of 80 cu. m/min of air from 100 to 900 kPa.",
        options: ["293", "358", "432", "325"],
        correct: 0
    },
    {
        question: "A coal fired power plant gave the following proximate analysis: 1.6% moisture, 15.7% ash, 27.8% volatile matter and 54.9% fixed carbon. Calculate its ash percent on a dry basis.",
        options: ["16.00", "14.00", "12.00", "10.00"],
        correct: 0
    },
    {
        question: "Determine the relative air to fuel ratio of a butane-fueled S.I engine operating with equivalence ratio of 0.85. Assume the fuel is fully burned within the cylinder.",
        options: ["1.18", "2.31", "1.11", "3.29"],
        correct: 0
    },
    {
        question: "An internal combustion engine with an A/F ratio of 14.5 uses fuel with a heating value of 19,000 Btu/lb fuel. The engine produces a brake power output of 455 bhp while consuming 92 lbs of fuel during a 32-minute period of operation. The indicated thermal efficiency is found to be 40 percent. Calculate the required air flow in lb air/min.",
        options: ["41.68", "34.56", "53.6", "32.7"],
        correct: 0
    },
    {
        question: "An internal combustion engine uses 9 pounds of air per minute at 1205 pm. The engine requires 0.351 lb/hr to produce a unit indicated power output of 1 ihp. The AF ratio is 15 to 1, the indicated thermal efficiency is 39 percent, and the mechanical efficiency is 83 percent. Find the heating value of the fuel used in Btu/lb fuel.",
        options: ["18,591", "16,742", "17,608", "15,308"],
        correct: 0
    },
    {
        question: "A fuel oil has the following ultimate analysis: 85.43% carbon, 11.31% hydrogen, 2.7% oxygen, 0.34% sulfur, and 0.22% nitrogen. The oil is burned with 60% excess air. At standard temperature of 60°F, the combustion product volumes per pound of fuel is 297.7 ft³. At 600 deg. F, what is the volume of dry flue gases that will be produced in ft³?",
        options: ["563.4", "234.6", "716.54", "432.5"],
        correct: 0
    },
    {
        question: "Gas mixture has the following volumetric analysis: 40% He, 15% O2, 20% N2 and 15% CO2. Find the gas constant of the mixtures.",
        options: ["0.543", "0.447", "0.314", "0.328"],
        correct: 1
    },
    {
        question: "The stack of a Coal Plant is 250m high 5m diameter emits 1000 kg/s of 100 deg. C gases into the 5 deg. C air. The prevailing wind velocity is 60 kh at atmospheric condition. Calculate the stack gas exit velocity in kph.",
        options: ["194", "206", "275", "132"],
        correct: 0
    },
    {
        question: "The gases mixed has the following partial pressure: 30 Kpa Helium, 35 Kpa O2 and 35 Kpa H2. Find the percent mass of O2.",
        options: ["85.49", "74.6", "82.7", "72.4"],
        correct: 0
    },
    {
        question: "A 32m high smoke stack of a certain power station discharges hot gases at 350 deg. C when the ambient temperature is 25 deg. C. If 15 kg of air has been supplied per kg of coal burned, determine the equivalent height in meters of hot gases column.",
        options: ["30.72", "35.23", "37.32", "28.67"],
        correct: 0
    },
    {
        question: "A coal has an ultimate analysis of 80% C, 4% H, 2% O2, and the rest ash. The flue gases are 15.6 deg. C and 101.3 kPa when sampled, and are 80% N2, 12% CO2, 7% O2, and 1% CO by volume. Determine the amount of air in percent required to burn 1 kg of coal under these conditions.",
        options: ["12.65", "11.45", "14.97", "19.52"],
        correct: 2
    },
    {
        question: "A fuel oil has the following ultimate analysis: 85.43% carbon, 11.31% hydrogen, 2.7% oxygen, 0.34% sulfur, and 0.22% nitrogen. The oil is burned with 60% excess air. At 600 deg. F, find the free hydrogen in percent.",
        options: ["10.97", "19.23", "14.23", "12.54"],
        correct: 0
    },
    {
        question: "A coal is 65% carbon by weight. During combustion, 3% of the coal is lost in the ash pit. Combustion uses 9.87 lbm of air per pound of fuel. The flue gas analysis is 81.5% nitrogen, 9.5% carbon dioxide, and 9% oxygen. Find the actual percent carbon due to coal lost in the ash pit.",
        options: ["43.56", "52.67", "63.05", "72.52"],
        correct: 2
    },
    {
        question: "The dry exhaust gas from oil engine has the following gravimetric analysis: CO2 = 21.6%, O2 = 4.2%, N2 = 74.2%. Specific heats at constant pressure for each component of the exhaust gas in Kcal/kg °C are: CO2 = 0.203, O2 = 0.219, N2 = 0.248. Calculate the specific heat at constant volume of the gas in kJ/kg-K if k = 1.36.",
        options: ["0.631", "0.542", "0.729", "0.871"],
        correct: 2
    },
    {
        question: "The ultimate analysis of a coal is 75% carbon, 5% hydrogen, 3% oxygen, 2% nitrogen, and the rest ash. Atmospheric air is 16°C and the standard pressure. How much is the lower heating value of the fuel in kJ/kg?",
        options: ["30,242.27", "45,535.65", "28,678.42", "35,456.54"],
        correct: 0
    },
    {
        question: "If 6.8 kg/h of propane (C3H8, MW = 44.097) is burned stoichiometrically in air. What is the volume of dry carbon dioxide (CO2, MW = 44.011) in CFM formed after cooling to 21 deg. C and 101 kPa?",
        options: ["6.60", "7.90", "4.25", "5.87"],
        correct: 0
    },
    {
        question: "A 300 MW thermal power station is to supply power to a system having maximum and minimum demand of 240 MW and 180 MW respectively in a year. Assuming the load duration curve to be straight line, find the load factor.",
        options: ["0.875", "0.751", "0.986", "0.651"],
        correct: 0
    },
    {
        question: "A 300 MW thermal power station is to supply power to a system having maximum and minimum demand of 240 MW and 180 MW respectively in a year. Assuming the load duration curve to be straight line, find the capacity factor.",
        options: ["0.87", "0.56", "0.84", "0.72"],
        correct: 0
    },
    {
        question: "A certain small scale power plant operates 4 hours a day, 40 weeks a year. If on average the plant is not available for 5 hours a week for scheduled and unscheduled maintenance, what is the utilization factor of the plant?",
        options: ["0.13", "0.22", "0.19", "0.21"],
        correct: 0
    },
    {
        question: "A certain small scale power plant operates 4 hours a day, 40 weeks a year. If on average the plant is not available for 5 hours a week for scheduled and unscheduled maintenance, what is the availability factor of the plant?",
        options: ["0.84", "0.76", "0.97", "0.84"],
        correct: 2
    },
    {
        question: "The mass of air in a room 3 x 5 x 20 m is known to be 350 kg. Determine the specific weight of air in N/m³.",
        options: ["11.45", "12.54", "10.52", "15.46"],
        correct: 0
    },
    {
        question: "The 34,000 hp of internal power of an axial air compressor having has inlet conditions of 14.5 psia and 66°F and discharge conditions of 162 psia and 648°F. Calculate the isentropic discharge temperature in deg. R",
        options: ["1209.34", "1161.45", "1048.22", "10456.8"],
        correct: 2
    },
    {
        question: "In a Rankine cycle, operates with steam at 600 psia and 850°F from the boiler and a condenser pressure of 1 inch Hg absolute. Enthalpies are h4 = 49.4 Btu/lb, h1 = 1435.4 Btu/lb, s1 = s2 = 1.6559 Btu/lb-R, h2 = 890.0 Btu/lb, h3 = 47.1 Btu/lb, s4 = s3 = 0.09146. Determine the heat supplied in Btu/lb.",
        options: ["1386.0", "1815.6", "1408.5", "1252.6"],
        correct: 0
    },
    {
        question: "In an Otto cycle the pressure and temperature at the beginning of the compression stroke is 16 psia and 76°F with a specific volume of 14.2 ft³/lb. At the end of compression, the specific volume is 2.2 ft³/lb. The heat supplied to the cycle is 355 Btu/lb. Calculate the thermal efficiency of the cycle.",
        options: ["52.55", "50.43", "54.25", "62.4"],
        correct: 0
    },
    {
        question: "0.60 kg of air are contained in a perfectly insulated, rigid enclosure. The ambient conditions outside the enclosure are 95 KPa and 20°C. The air inside the enclosure is initially at 200 KPa and 20°C. Subsequently, an internal impeller within the enclosure raises the air's pressure to 230 KPa through a shaft from an external motor with a motor efficiency of 65%. What is the temperature in deg. F inside the enclosure after the pressure is increased?",
        options: ["143.5", "151.2", "147.11", "132.6"],
        correct: 2
    },
    {
        question: "In a Rankine cycle, saturated water at 252°F (v = 0.018001 ft³/lb, h = 219.59 Btu/lb, P = 29.6 psia) enters a feed pump and is discharge at 1210 psia with a pump efficiency is 65 percent and the mass rate is 126,000 lb/hr. Find the water horsepower.",
        options: ["145.5", "174.6", "194.71", "120.52"],
        correct: 2
    },
    {
        question: "A reversed Carnot uses 1 lb of air is to constitute as refrigerating cycle between temperatures limits of 144 F and 41F. The isothermal expansion ratio for the cycle is 3.1. The pressure at the start of isothermal expansion is 50 psia. Calculate the heat rejected by the working substance in Btu/lb.",
        options: ["42", "34", "83", "44"],
        correct: 2
    },
    {
        question: "Calculate the approximate enthalpy (in Btu/lb) of vapor having a steam temperature of 40°C.",
        options: ["1107.80", "1456.52", "2109.4", "2018.9"],
        correct: 0
    },
    {
        question: "A certain plant that operates in an ideal Rankine reheat cycle has steam at 1200 psia and 1060°F from the boiler. After expansion in the turbine to 90 psia, the steam is reheated to a temperature of 950°F. Condenser pressure is maintained at one inch of mercury absolute. h1 = 1534.7 Btu/lb, h2 = 1219.3 Btu/lb, h3 = 1506.5 Btu/lb, h4 = 1029.0 Btu/lb, h5 = 47.1, h6 = 51.2 Btu/lb. Calculate the heat added in Btu/lb.",
        options: ["1770.7", "1249.6", "1394.6", "1097.8"],
        correct: 0
    },
    {
        question: "A mixture of 1 kmol of gaseous methane and 2 kmol of oxygen initially at NTP burns completely in a closed rigid container. Heat transfer occurs until the products are cooled to 900 K. If the reactants and products each form ideal gas mixtures, what is the final pressure in kPa?",
        options: ["355.516", "245.678", "310.178", "120.789"],
        correct: 2
    },
    {
        question: "Water at 25°C has a saturation vapor pressure of 3.1504 KPa. Liquid compound B (molecular weight of 52.135) at 25°C has a saturation vapor pressure of 7.2601 KPa. If 75 g of liquid water are mixed with 45g of liquid compound B, what is the resulting vapor pressure of the solution in kPa?",
        options: ["2.56", "4.56", "3.85", "5.42"],
        correct: 2
    },
    {
        question: "The vapor pressure of zinc is given by the equation: ln(P) (solid) = -15,780/T - 0.755 ln(T) + 19.25 and ln(P) (liquid) = -15,650/T - 1.255 ln(T) + 21.79, where T is absolute temperature in kelvin. What should be the triple point of zinc in deg. C?",
        options: ["175.44", "126.73", "173.44", "183.54"],
        correct: 0
    },
    {
        question: "The vapor pressure of zinc is given by the equation: ln(P) (solid) = -15,780/T - 0.755 ln(T) + 19.25 and ln(P) (liquid) = -15.650/T - 1.255 ln(T) + 21.79, where T is absolute temperature in kelvin. What is the boiling temperature of zinc in deg. C at 5 x 10⁻⁴ atm?",
        options: ["468.8", "541.6", "432.5", "319.7"],
        correct: 0
    },
    {
        question: "A chef attended a cooking competition where the average atmospheric pressure is 87 kPa. If the elevation is at 1000 m from sea level, compute the temperature in deg. C at which the water in uncovered pan will boil.",
        options: ["96", "45", "65", "54"],
        correct: 0
    },
    {
        question: "An air standard engine operates on Carnot cycle which have the ratio of maximum and minimum volume of 19. Given that the lower temperature of the cycle is fixed at 100 deg. C, determine the MAXIMUM thermal efficiency of the cycle if the compression ratio of adiabatic compression is variable.",
        options: ["49.50", "42.54", "52.35", "62.34"],
        correct: 0
    },
    {
        question: "1 kg of air at NTP is compressed in an Otto cycle with a compression ratio of 7. During the combustion process, 954.66 kJ of heat is added to the air. Determine the maximum efficiency of a Carnot cycle operating between the maximum and minimum temperatures of the Otto cycle.",
        options: ["85.08", "65.67", "72.35", "82.56"],
        correct: 0
    },
    {
        question: "A facility handling liquid methane at 115 K and 5 MPa needs to reduce its pressure to 1 MPa. Instead of throttling, an engineer proposes using a turbine for this process to generate power. Calculate the potential annual savings if the turbine operates continuously at a rate of P15.00/kWh. At 5 MPa, 115K: h = 232.2 KJ/kg, s = 4.9945 KJ/kg-K, p = 422.15 kg/m³ At 1 MPa: h = 222.8 KJ/kg.",
        options: ["140,203,800", "130,646,700", "103,566.67", "208,565.75"],
        correct: 0
    },
    {
        question: "An open vertical cylindrical vessel, 2 m in diameter and 4 m high is filled with water to the top. If rotated on its own vertical axis in order to discharge a quantity of water to uncover a circular area at the bottom of a vessel 1 m in diameter. Calculate the volume of water left in the cylinder after rotation.",
        options: ["167 cu.ft", "185 cu.ft", "186 cu.ft", "152 cu.ft"],
        correct: 0
    },
    {
        question: "A Carnot heat engine converts one-fifth of the heat input into power output. If the temperature of the sink is reduced by 100 deg. C, its thermal efficiency is doubled. Determine the temperature of the source in deg. R.",
        options: ["891.7", "781.6", "900.6", "854.7"],
        correct: 2
    },
    {
        question: "A piston-cylinder device contains 0.05 m³ of gas initially at 200 KPa. At this state, a linear spring that has a spring constant of 150 KN/m is touching the piston but exerting no force on it. Now heat is transferred to the gas, causing the piston to rise and to compress the spring until the volume inside the cylinder doubles. If the cross-sectional area of the piston is 0.25 m², determine the total work done by the gas in Btu.",
        options: ["11.67", "10.78", "12.32", "13.45"],
        correct: 2
    },
    {
        question: "Spark Ignition engine is proposed to have a compression ratio of 10 while operating with a low temperature of 200 deg. C and a low pressure of 200 kPa. Determine the temperature after compression in K.",
        options: ["1188", "1302", "1054", "1290"],
        correct: 0
    },
    {
        question: "The forced convection coefficient for a hot fluid flowing over a cool surface is 0.12 kW per SQM. The fluid temperature upstream from the cool surface is 394K and the surface is held at 285K. Determine the heat transfer per unit surface area from the fluid to the surface.",
        options: ["13.08", "12.90", "15.46", "12.54"],
        correct: 0
    },
    {
        question: "A diesel cycle with a compression ratio of 18, operates on air With a low pressure of 200 kPa and a low temperature of 200 deg. C. Determine the pressure after isentropic compression in MPa.",
        options: ["12.45", "10.54", "11.44", "14.21"],
        correct: 2
    },
    {
        question: "At the start of compression an ideal Diesel cycle using air as working substance has a pressure of 16 psia, a temperature of 77°F and a specific volume of 14.2 ft³/lb. If the compression ratio of 16 and heat addition is 355 Btu per pound, calculate the pressure after expansion of the cycle in psia.",
        options: ["32.45", "34.56", "39.57", "38.62"],
        correct: 2
    },
    {
        question: "A body at 20 deg. C is set out on a roof top during the night. The body 'sees' nothing but the sky which has an effective temperature of 120 K. Determine the heat transfer rate in W from the body to the sky if the body temperature is maintained at 22 deg. C, the surface emissivity of the body is equal to 0.90, and none of the radiation going out of the body comes back.",
        options: ["298", "403", "309", "365"],
        correct: 3
    },
    {
        question: "A dual cycle is used to model a piston engine. The engine intakes atmospheric air at 20 deg. C and 100 kPa compresses it to 10 MPa, and then combustion increases the pressure to 20 MPa. For a cutoff ratio of 2, determine the temperature after the isentropic compression in K",
        options: ["1406", "1154", "1092", "1320"],
        correct: 2
    },
    {
        question: "A constant cross-section, rectangular fin 6 cm long, with a base of 1 cm x 2 mm is used to dissipate heat from a 400 deg. C surface. The convection coefficient is 20 Watt per square meter per Kelvin (W/m²-K) and the conductivity is 40 W/m-K. The temperature of the air surrounding the fin is 35 deg. C, Determine the effectiveness of the fin if the heat transfer from the fin is 6.5 W.",
        options: ["34.56", "52.98", "39.78", "44.52"],
        correct: 3
    },
    {
        question: "At the start of compression an ideal Diesel cycle using air as working substance has a pressure of 16 psia, a temperature of 77°F and a specific volume of 14.2 ft³/lb. if the compression ratio of 16 and heat addition is 355 Btu per pound, calculate the temperature after expansion of the cycle in deg. R",
        options: ["1245.65", "1097.5", "1327.54", "1340.65"],
        correct: 2
    }
];

// DOM Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const restartBtn = document.getElementById('restart-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const currentQuestionNum = document.getElementById('current-question-num');
const totalQuestionsSpan = document.getElementById('total-questions');
const progressBar = document.getElementById('progress-bar');
const scoreSpan = document.getElementById('score');
const totalScoreSpan = document.getElementById('total-score');
const feedbackMessage = document.getElementById('feedback-message');
const randomizeToggle = document.getElementById('randomize-toggle');
const feedbackDiv = document.getElementById('question-feedback');

// Quiz State
let currentQuestionIndex = 0;
let quizQuestions = [];
let userAnswers = []; // Array to store user selected indices, null if not answered

// Event Listeners
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
prevBtn.addEventListener('click', prevQuestion);
restartBtn.addEventListener('click', resetQuiz);

function startQuiz() {
    const shouldRandomize = randomizeToggle.checked;

    // Create a copy of the questions array
    quizQuestions = [...questions];

    if (shouldRandomize) {
        shuffleArray(quizQuestions);
    }

    // Reset state
    currentQuestionIndex = 0;
    userAnswers = new Array(quizQuestions.length).fill(null);

    // Update UI
    totalQuestionsSpan.textContent = quizQuestions.length;

    // Switch screens
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');

    loadQuestion();
}

function loadQuestion() {
    // Reset button states based on history
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const userAnswer = userAnswers[currentQuestionIndex];
    const hasAnswered = userAnswer !== null;

    // Clear feedback initially
    if (feedbackDiv) {
        feedbackDiv.textContent = '';
        feedbackDiv.className = 'question-feedback';
    }

    // Nav Buttons State
    prevBtn.disabled = currentQuestionIndex === 0;
    prevBtn.style.opacity = currentQuestionIndex === 0 ? "0.5" : "1";

    if (currentQuestionIndex === quizQuestions.length - 1) {
        nextBtn.textContent = "Finish Quiz";
    } else {
        nextBtn.textContent = "Next Question";
    }

    // Only enable next if answered
    nextBtn.disabled = !hasAnswered;
    nextBtn.style.opacity = !hasAnswered ? "0.5" : "1";

    // Update Question Number and Text
    currentQuestionNum.textContent = currentQuestionIndex + 1;
    questionText.textContent = currentQuestion.question;

    // Update Progress Bar
    const progress = ((currentQuestionIndex) / quizQuestions.length) * 100;
    progressBar.style.width = `${progress}%`;

    // Create Options
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        const prefix = String.fromCharCode(65 + index); // 65 is 'A'
        btn.textContent = `${prefix}. ${option}`;

        // If this was the selected one (even if correct), mark selected for border
        if (hasAnswered) {
            if (index === userAnswer) {
                btn.classList.add('selected');

                // Show feedback for retained answer
                if (index === currentQuestion.correct) {
                    btn.classList.add('correct');
                    if (feedbackDiv) {
                        feedbackDiv.textContent = "Correct!";
                        feedbackDiv.classList.add('correct');
                    }
                } else {
                    btn.classList.add('incorrect');
                    if (feedbackDiv) {
                        feedbackDiv.textContent = "Incorrect. The correct answer is highlighted in green.";
                        feedbackDiv.classList.add('incorrect');
                    }
                }
            }

            // ALWAYS highlight the correct answer if answered
            if (index === currentQuestion.correct && userAnswer !== currentQuestion.correct) {
                btn.classList.add('correct');
            }
        }

        btn.addEventListener('click', () => selectOption(index, btn));

        optionsContainer.appendChild(btn);
    });
}

function selectOption(selectedIndex, selectedBtn) {
    // Store answer
    userAnswers[currentQuestionIndex] = selectedIndex;

    const currentQuestion = quizQuestions[currentQuestionIndex];
    const correctIndex = currentQuestion.correct;

    // Clear previous selection and feedback
    const allOptions = optionsContainer.querySelectorAll('.option-btn');
    allOptions.forEach(btn => {
        btn.classList.remove('selected', 'correct', 'incorrect');
    });

    if (feedbackDiv) {
        feedbackDiv.className = 'question-feedback'; // Reset classes
    }

    // UI Effects
    selectedBtn.classList.add('selected');

    // Immediate feedback
    if (selectedIndex === correctIndex) {
        selectedBtn.classList.add('correct');
        if (feedbackDiv) {
            feedbackDiv.textContent = "Correct!";
            feedbackDiv.classList.add('correct');
        }
    } else {
        selectedBtn.classList.add('incorrect');
        // Highlight correct answer
        const correctBtn = optionsContainer.children[correctIndex];
        correctBtn.classList.add('correct');

        if (feedbackDiv) {
            feedbackDiv.textContent = "Incorrect. The correct answer is highlighted in green.";
            feedbackDiv.classList.add('incorrect');
        }
    }

    // Enable Next Button
    nextBtn.disabled = false;
    nextBtn.style.opacity = "1";
}

function nextQuestion() {
    if (currentQuestionIndex < quizQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        showResults();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function showResults() {
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');

    // Calculate Score
    let score = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === quizQuestions[index].correct) {
            score++;
        }
    });

    scoreSpan.textContent = score;
    totalScoreSpan.textContent = quizQuestions.length;

    // Feedback
    const percentage = (score / quizQuestions.length) * 100;
    if (percentage >= 80) {
        feedbackMessage.textContent = "Excellent! You've mastered this topic!";
    } else if (percentage >= 60) {
        feedbackMessage.textContent = "Good job! Keep practicing.";
    } else {
        feedbackMessage.textContent = "Keep studying! You can do better.";
    }
}

function resetQuiz() {
    resultScreen.classList.remove('active');
    startScreen.classList.add('active');
}

// Fisher-Yates Shuffle
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
