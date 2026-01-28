const questions = [
    {
        question: "Carnot engine operates between two temperature reservoirs maintained at 200 deg. C and 20 deg. C respectively. If the desired output of the engine is 15 KW. Determine the efficiency of the engine.",
        options: ["38 %", "40 %", "45 %", "30 %"],
        correct: 0
    },
    {
        question: "The ultimate analysis of a coal is 75% carbon, 5% hydrogen, 3% oxygen, 2% nitrogen, and the rest ash. Atmospheric air is 16°C and the standard pressure. The energy required to raise the combustion products (from 1 lbm of coal) 1ºF is 2.92 Btu/°F. How much is the theoretical temperature of the combustion products in deg. F ?",
        options: ["5366", "3515", "4497", "3257"],
        correct: 0
    },
    {
        question: "A mass and volume of 300 kPa, 80 deg. C and 0.07 cubic meter, respectively. The gas undergoes irreversible adiabatic process to a final pressure of 300 kPa and final volume of 0.10 cu. m, during which the work done on the gas is 25 kJ. Determine the gas constant.",
        options: ["0.238", "0.325", "0.486", "0.352"],
        correct: 0
    },
    {
        question: "The ultimate analysis of a coal is 75% carbon, 5% hydrogen, 2% nitrogen, and the rest ash. Atmospheric air is 16°C and the standard pressure. The energy required to raise the combustion products (from 1 kg of coal) 16°℃ is 12.22 kJ/K. How much is the theoretical temperature of the combustion products in deg. C?",
        options: ["2836.72", "3246.61", "1576.67", "2490.8"],
        correct: 3
    },
    {
        question: "A mass of 0.25 kg of an ideal gas has a pressure, temperature and volume of 300 kPa, 80 deg. C and 0.07 cubic meter, respectively. The gas undergoes irreversible adiabatic process to a final pressure of 300 kPa and final volume of 0.10 cu. m, during which the work done on the gas is 25 kJ. Determine the FINAL temperature in K.",
        options: ["505", "708", "627", "808"],
        correct: 0
    },
    {
        question: "In a particular installation, 30% excess air at 103 kPa and 40°C is needed for the combustion of methane. Determine the volume of nitrogen (MW = 28.016) in m3/min passes through the furnace if methane is burned at the rate of 31 L/s.",
        options: ["18.18", "12.56", "10.67", "17.54"],
        correct: 0
    },
    {
        question: "A mass of 0.25 kg of an ideal gas has a pressure, temperature and volume of 300 kPa, 80 deg. C and 0.07 cubic meter, respectively. The gas undergoes irreversible adiabatic process to a final pressure of 300 kPa and final volume of 0.10 cu. m, during which the work done on the gas is 25 kJ. Determine Cv.",
        options: ["0.897", "0.974", "0.658", "0.585"],
        correct: 2
    },
    {
        question: "In a certain coal-fired power plant, a bituminous coal has the following composition: C = 75% H = 5% O = 7% N = 1.3% S = 3.6% Ash = 8.2% W = 3.4%. Determine the theoretical weight of nitrogen in lb/lb of coal.",
        options: ["4.456", "5.262", "7.526", "3.406"],
        correct: 2
    },
    {
        question: "The peak load on a power plant is 60 MW. The loads having a maximum demand of 30 MW, 20 MW, 10 MW and 14 MW are connected to the power plant. The capacity of the power plant is 80 MW and the annual load factor is 0.50. Determine the energy supplied per year in kW-hr.",
        options: ["2.63E8", "3.52E8", "5.65E8", "4.56E8"],
        correct: 0
    },
    {
        question: "The peak load on a power plant is 60 MW. The loads having maximum demands of 30 MW, 20 MW, 10 MW and 14 MW are connected to the power plant. The capacity of the power plant is 80 MW and the annual load factor is 0.50. Determine the ratio diversity factor over demand factor.",
        options: ["1.52", "1.83", "1.75", "2.45"],
        correct: 0
    },
    {
        question: "Oxygen at 20 MPa is to be stored in a steel vessel at 20°C. The capacity of the vessel is 0.04 cubic meter. Assuming that oxygen is a perfect gas and the vessel is protected against excessive pressure by a fusible plug which will melt if the temperature rises too high. At what temperature in deg. C must the plug melt to limit the pressure in the vessel to 24 MPa?",
        options: ["92.8", "78.6", "82.7", "72.9"],
        correct: 1
    },
    {
        question: "A 300 MW thermal power station is to supply power to a system having maximum and minimum demand of 240 MW and 180 MW respectively in a year. Assuming the load duration curve to be straight line, find the capacity (load?) factor.",
        options: ["0.87", "0.56", "0.97", "0.99"],
        correct: 0
    },
    {
        question: "A Subdivision has twenty identical houses. The maximum possible power consumption in each house is 7 kW. However, the people living in each are saving electricity consumption in which the actual power consumption is 3 kW. If the maximum power consumption of the subdivision is 50 kW, what is the coincidence factor?",
        options: ["0.83", "0.94", "0.75", "0.61"],
        correct: 0
    },
    {
        question: "A 200 m3 rigid tank contains compressed air at 1.2 MPa and 300°K. Determine how much work in Btu/lb can be obtained from this air if the environment condition is 100 kPa and 300°K.",
        options: ["45", "67", "58", "82"],
        correct: 2
    },
    {
        question: "The maximum demand of certain power station in the country is 92 MW. The daily load curve is described as follows: <br>Time (hours): 1(0-6) 2(6-8) 3(8-12) 4(12-14) 5(14-18) 6(18-22) 7(22-24)<br>Load (MW): 1(48) 2(60) 3(72) 4(60) 5 (84) 6(96) 7(48)<br>Calculate the load factor of a standby equipment rated at 30 MW that takes up all load in excess of 72 MW.",
        options: ["0.75", "0.56", "0.65", "0.45"],
        correct: 0
    },
    {
        question: "A cubical tank 1 m on a side, contains a mixture of 1.8 kg of nitrogen and 2.8 kg of an unknown gas. The mixture pressure and temperature are 290 kPa and 340°K. Determine the molecular weight of the unknown gas.",
        options: ["82", "68", "73", "79"],
        correct: 2
    },
    {
        question: "A power station supplies the following to the consumers:<br>Time (hours): 1(0-6) 2(6-10) 3(10-12) 4(12-16) 5(16-20) 6(20-22) 7(22-24)<br>Load (MW): 1(30) 2(70) 3(90) 4(60) 5 (100) 6(80) 7(60)<br>What is the load factor of the plant?",
        options: ["0.65", "0.76", "0.82", "0.73"],
        correct: 0
    },
    {
        question: "Find the flow in m3/s in a 15 m wide rectangular channel for which the critical depth is 3 m.",
        options: ["244.12", "306.56", "290.42", "309.45"],
        correct: 0
    },
    {
        question: "A power station supplies the following to the consumers:<br>Time (hours): 1(0-6) 2(6-10) 3(10-12) 4(12-16) 5(16-20) 6(20-22) 7(22-24)<br>Load (MW): 1(30) 2(70) 3(90) 4(60) 5 (100) 6(80) 7(60)<br>What is the load factor of a standby equipment of 30 MW capacity if it takes up all loads above 70 MW.",
        options: ["0.75", "0.60", "0.52", "0.89"],
        correct: 0
    },
    {
        question: "A piston cylinder contains 6 kg of air. During a compression process, 100 kJ of heat is removed while 250 kJ of work is done on the air. Determine the change in internal energy of the air in kJ/kg.",
        options: ["25", "40", "32", "19"],
        correct: 0
    },
    {
        question: "A power station supplies the following to the consumers:<br>Time (hours): 1(0-6) 2(6-10) 3(10-12) 4(12-16) 5(16-20) 6(20-22) 7(22-24)<br>Load (MW): 1(30) 2(70) 3(90) 4(60) 5 (100) 6(80) 7(60)<br>What is the use factor of a standby equipment of 30 MW capacity if it takes up all loads above 70 MW.",
        options: ["0.75", "0.60", "0.52", "0.89"],
        correct: 0
    },
    {
        question: "A cylinder piston apparatus contains 0.5 kg of air initially at 27°C and 100 kPa. The air is compressed polytropically to a final pressure of 500 kPa and final temperature of 127°C, determine the polytropic exponent for this process.",
        options: ["1.33", "1.22", "1.56", "1.13"],
        correct: 1
    },
    {
        question: "An unknown hydrocarbon fuel, CnHm, was allowed to react with air. An ORSAT was made of a representative sample of the product gases with the following result: CO2 = 12.1% O2 = 3.8% and CO = 0.8%. Determine the composition of the fuel.",
        options: ["C13H23", "C10H32", "C12H24", "C4H8"],
        correct: 0
    },
    {
        question: "The prototype vehicle features a hybrid drivetrain with a Stirling engine that operates between the temperature limit of 35°C and 790°C. The pressure of the working medium at the beginning of isothermal compression is 100 kPa with a compression ratio of 6. The heat is supplied at 950 kJ/min with a regenerator efficiency of 78%. Determine the net work done in HP.",
        options: ["12.53", "13.5", "11.71", "14.52"],
        correct: 2
    },
    {
        question: "Four liters of octane gasoline weigh 3.91 kg. Determine the volume of the air required for complete combustion at STP in L.",
        options: ["45,731", "34.567", "40,506", "43,214"],
        correct: 0
    },
    {
        question: "The prototype vehicle features a hybrid drivetrain with a Stirling engine that operates between the temperature limit of 35°C and 790°C. The pressure of the working medium at the beginning of isothermal compression is 100 kPa with a compression ratio of 6. The heat is supplied at 950 kJ/min with a regenerator efficiency of 78%. Determine the thermal efficiency of the cycle.",
        options: ["32,56", "55.16", "10.17", "19.96"],
        correct: 1
    },
    {
        question: "An air is compressed reversibly in a cylinder from 16 psia to final pressure of 64 psia. The initial temperature and specific volume are 62°F and 1 cu. Ft. Find the work required in BTU if the process is isothermal.",
        options: ["4.10", "3.24", "2.14", "5.42"],
        correct: 0
    },
    {
        question: "A tank contains Helium for which heated from 85°F to a final temperature of 210°F in an unknown process. Find the change of internal energy in BTU/lb.",
        options: ["94.02", "82.57", "90.7", "81.8"],
        correct: 0
    },
    {
        question: "An Ideal gas at a pressure of 500 kPa and a temperature of 75°C is contained in a cylinder with a volume of 750 m3. Some of the hgas is released so that the pressure in the cylinder drops to 250 kPa. Determine the mass (in lbm) of the gas remaining in the cylinder.",
        options: ["6096", "5054", "8098", "2406"],
        correct: 1
    },
    {
        question: "In an Ideal Brayton Cycle, the five-step turbine is equipped with a reheater that increases the temperature of the low-pressure turbine inlet flow to the temperature of the high-pressure turbine inlet flow. For the ficed given states of the first turbine inlet and the fifth turbine outlet, determine the pressure of the reheater that maximizes the specific network output of the turbine if the total pressure ratio is 16.",
        options: ["1.98", "2.09", "3.09", "1.74"],
        correct: 0
    },
    {
        question: "A 5 lbs helium gas has 25 BTU of heat are added at constant volume when initial temperature is 100°F, find the final temperature in °F.",
        options: ["109.56", "119.45", "190.43", "106.65"],
        correct: 3
    },
    {
        question: "If a hydrogen gas is compressed to an insulated cylinder from 22℃ at 102 KPa and 0.25 m3 to 0.01 m3.",
        options: ["235.65 KJ", "109.89 KJ", "170.57 kJ", "150.45 kJ"],
        correct: 2
    },
    {
        question: "The calorific value of gaseous decane is 69 MJ/kg. Determine the lower heating value of decane gas in MJ/kg if the enthalpy of water at 25°C is 2400 kJ/kg and for decane is 358 kJ/kg.",
        options: ["56.54", "47.63", "65.65", "60.45"],
        correct: 2
    },
    {
        question: "An air compressor with compression efficiency of 84% has an internal power of 66 hp and an overall pressure ratio of 11. Inlet conditions are 14.7 psia and 61°F. Determine isentropic discharge temperature in °R.",
        options: ["1650.50", "1897.45", "1033.66", "1208.32"],
        correct: 2
    },
    {
        question: "In a particular installation, 30% excess air at 103 kPa and 40°C is needed for the combustion of methane. How much of nitrogen (MW: 28.016) in kg/min passes through the furnace if methane is burned at the rate of 31 L/s?",
        options: ["23.45", "18.46", "20.15", "20.67"],
        correct: 2
    },
    {
        question: "A steam Carnot cycle operates between 340°C and 38 °C. The turbine and compressor efficiencies are 90% and 80% respectively. Solve for actual enthalpy in BTU/lb at turbine exit. Enthalpies at each point (Corner): h1 = 1594.5 kJ/kg, h2 = 2621.9 kJ/kg, h3 = 1649 kJ/kg, and h4 = 1128.3 kJ/kg.",
        options: ["560.7", "890.45", "750.68", "809.45"],
        correct: 2
    },
    {
        question: "A certain Carnot power cycle uses 1 lb of air as a working substance is assumed to operate at temperature limits of 605°F and 75°F. The pressure at the beginning and end of the isothermal expansion process are 520 psia and 180 psia, respectively. Determine the heat supplied to cycle in BTU/lb.",
        options: ["89.6", "45.7", "65.5", "77.4"],
        correct: 3
    },
    {
        question: "A heat source added 1060 BTU/lb of a working substance in a closed thermos dynamic power cycle. The sink receives 653 BTU/lb of working substance. The system requires 6.4 BTU/lb of substance pumped. What is the thermal efficiency of the cycle?",
        options: ["45.67", "38.39", "83.45", "78.34"],
        correct: 1
    },
    {
        question: "A certain manufacturer makes the following claims concerning the operation of a steam turbine: under adiabatic conditions, steam will enter the turbine at an absolute pressure of 3 MPa and 350°C and exit as saturated vapor at 75 kPa (2663 kJ/kg). If the mass flow rate of the steam is 1 kg/s, determine the power output of the turbine in kW. The properties of steam at 3 MPa and 350 °C are h = 3115.3 kJ/kg, s = 6.7428 kJ.kg-K",
        options: ["324.5", "543.5", "298.6", "452.3"],
        correct: 3
    },
    {
        question: "In an ideal Brayton Cycle, the five-step turbine is equipped with a reheater that increases the temperature of the low-pressure turbine inlet flow to the temperature of the high-pressure turbine inlet flow. For the fixed given states of the first turbine inlet and the fifth turbine outlet, determine the no. of reheater.",
        options: ["4", "10", "8", "2"],
        correct: 0
    },
    {
        question: "Determine the diameter in millimeter of a water droplet at 20° when the pressure within it is 2.0 kPa greater than the outside. Note: The surface tension of water at 20°C is 0.0728 N/m",
        options: ["0.3", "0.4", "0.2", "0.1"],
        correct: 2
    },
    {
        question: "In a test laboratory, it was found that the 80 Bhp developed by an engine on test, 45 hp is absorbed by the colling water that is pumped through the water jacket and the radiator. The water enters the top of the radiation at200°F. At that temperature the enthalpy of the water is 168.07 BTU/lb. Water leaves the bottom of the radiator at 190°F and with an enthalpy of 158.03 BTU/lb. What is the water flow rate for a steady state operation in ft3/min?",
        options: ["2.0973", "3.0455", "5.1098", "4.5068"],
        correct: 1
    },
    {
        question: "A 200 m3 rigid tank contains compressed air at 1 MPa and 300 K. Determine how much work in BTU can be obtained from this air if the environment conditions are 100 kPa and 300 K.",
        options: ["450,900", "297,987", "307,596", "265,900"],
        correct: 3
    },
    {
        question: "In an ideal Brayton Cycle, the six-step turbine is equipped with a reheater that increases the temperature of the low-pressure turbine inlet flow to the temperature of the high-pressure turbine inlet flow. For the fixed given states of the first turbine inlet and the sixth turbine outlet, determine the no. of reheater.",
        options: ["5", "3", "4", "2"],
        correct: 0
    },
    {
        question: "An air standard engines operates on Carnot Cycle which have the ratio of maximum and minimum volume of 20. Given that the lower temperature of the cycle is fixed, determine the compression ratio of adiabatic compression if it is variable and work done of the cycle is maximum.",
        options: ["5.7", "6.2", "9.8", "10.2"],
        correct: 0
    },
    {
        question: "An air standard engine operates on Carnot Cycle which have the ratio of maximum and minimum volume of 18. Given that the lower temperature of the cycle is fixed at 100°C, determine the maximum network of the cycle is if the compression ratio of adiabatic compression is variable.",
        options: ["198.32 kJ/kg", "134.86 kJ/kg", "129.28 kJ/kg", "109.47 kJ/kg"],
        correct: 0
    },
    {
        question: "A facility handling liquid methane at 115 K and 5MPa needs to reduce its pressure to 1 MPa. Instead of throttling, an engineer proses using a turbine for this process to generate power. Calculate the maximum amount of power that can be produced by plant in kWh.yr if the turbine operates continuously at a rate of P15.00/kWh. At 5 MPa, 115 K: h = 232.2 kJ/kg, s = 4.9945 kJ/kg, p = 422.15 kg/m3, At 1 MPa h = 228. kJ/kg.",
        options: ["9,346,920", "5,584.325", "10,509.89", "8,097.87"],
        correct: 0
    },
    {
        question: "A 4ft high, 3 ft diameter cylindrical water tank whose top is open to the atmosphere is initially filled with water. Now the discharge plug near the bottom of the tank is pulled out, and waterjet whose diameter is 0.5 in streams out. Determine how long will it take the water level in the tank to drop to 2 ft leve from the bottom in hour.",
        options: ["0.21", "0.32", "0.16", "0.19"],
        correct: 0
    },
    {
        question: "An open vertical cylindrical vessel, 2 m in diameter and 4 m high is filled with water to the top. If rotated on its own vertical axis in order to discharge a quantity of water to uncover a circular are at the bottom of a vessel 1 m in diameter. Find the angular speed in rpm.",
        options: ["97.65", "87.56", "90.56", "82.34"],
        correct: 0
    },
    {
        question: "A conical vessel with sides inclined 30 with its vertical axis revolved about another axis 1 m from its own and parallel. How many revolutions per minute must it take in order that water poured into it will be entirely discharge by the rotative effect?",
        options: ["39.36", "43.62", "87.9", "23.5"],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;
let quizQuestions = [];
let userAnswers = new Array(questions.length).fill(null);

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const finishBtn = document.getElementById('finish-btn');
const restartBtn = document.getElementById('restart-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const questionCount = document.getElementById('question-count');
const scoreDisplay = document.getElementById('score-display');
const progressFill = document.getElementById('progress-fill');
const finalScore = document.getElementById('final-score');
const percentageDisplay = document.getElementById('percentage-display');

startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
prevBtn.addEventListener('click', prevQuestion);
finishBtn.addEventListener('click', finishQuiz);
restartBtn.addEventListener('click', restartQuiz);

function startQuiz() {
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');

    // User requested randomization
    quizQuestions = [...questions].sort(() => Math.random() - 0.5);
    userAnswers = new Array(questions.length).fill(null);
    currentQuestion = 0;
    score = 0;
    loadQuestion();
}

function loadQuestion() {
    const q = quizQuestions[currentQuestion];
    questionText.innerHTML = q.question;
    optionsContainer.innerHTML = '';

    const hasAnswered = userAnswers[currentQuestion] !== null;

    q.options.forEach((option, index) => {
        const btn = document.createElement('div');
        btn.classList.add('option-btn');

        // Restore state if already answered
        if (hasAnswered) {
            if (index === q.correct) {
                btn.classList.add('correct');
            }
            if (userAnswers[currentQuestion] === index && index !== q.correct) {
                btn.classList.add('incorrect');
            }
            // Add selected style simply to show what was picked if not using correct/incorrect logic purely
            // But here we want to show right/wrong.
            // If we want to strictly follow "show correct answer", we should mark the correct one.
            // And if the user picked wrong, mark theirs wrong.

            // Disable click
            btn.style.pointerEvents = 'none';
        }

        btn.innerHTML = `
            <span class="option-letter">${String.fromCharCode(65 + index)}</span>
            <span class="option-text">${option}</span>
        `;

        // Only add click listener if not answered
        if (!hasAnswered) {
            btn.onclick = () => selectAnswer(index);
        }

        optionsContainer.appendChild(btn);
    });

    updateUI();
}

function selectAnswer(index) {
    if (userAnswers[currentQuestion] !== null) return; // Prevent changing answer

    userAnswers[currentQuestion] = index;
    const q = quizQuestions[currentQuestion];

    // UI update for selection
    const options = document.querySelectorAll('.option-btn');
    options.forEach((opt, i) => {
        // Disable all buttons
        opt.style.pointerEvents = 'none';

        if (i === q.correct) {
            opt.classList.add('correct');
        }

        if (i === index && i !== q.correct) {
            opt.classList.add('incorrect');
        }
    });
}

function updateUI() {
    questionCount.innerText = `Question ${currentQuestion + 1}/${questions.length}`;

    // Progress Bar
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressFill.style.width = `${progress}%`;

    // Button states
    prevBtn.disabled = currentQuestion === 0;

    if (currentQuestion === questions.length - 1) {
        nextBtn.classList.add('hidden');
        finishBtn.classList.remove('hidden');
    } else {
        nextBtn.classList.remove('hidden');
        finishBtn.classList.add('hidden');
    }
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

function finishQuiz() {
    calculateScore();
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');

    finalScore.innerText = score;
    const percentage = Math.round((score / questions.length) * 100);
    percentageDisplay.innerText = `${percentage}%`;
}

function calculateScore() {
    score = 0;
    quizQuestions.forEach((q, index) => {
        // Find original question index to compare with correct answer
        // Note: We need to compare user's selected index with the question's correct index
        // Since q is the question object, q.correct is the index of the correct option
        if (userAnswers[index] === q.correct) {
            score++;
        }
    });
}

function restartQuiz() {
    resultScreen.classList.remove('active');
    startScreen.classList.add('active');
}
