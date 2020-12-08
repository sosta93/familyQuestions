const quizData = [
    {
        question: 'ΠΟΥ ΓΝΩΡΙΣΤΗΚΑΝ Ο ΜΠΑΜΠΑΣ ΜΕ ΤΗΝ ΜΑΝΑ;',
        a: 'ΓΗΠΕΔΟ',
        b: 'ΚΑΦΕΤΕΡΙΑ',
        c: 'ΕΚΚΛΗΣΙΑ',
        d: 'ΠΡΟΞΕΝΙΟ',
        correct: 'c'
    }, {
        question: 'ΠΟΥ ΠΗΓΑΝΕ ΤΟ ΠΡΩΤΟ ΤΟΥΣ ΤΑΞΙΔΙ Η ΜΑΜΑ ΜΕ ΤΟΝ ΜΠΑΜΠΑ;',
        a: 'ΧΑΛΚΙΔΙΚΗ',
        b: 'ΘΑΣΟ',
        c: 'ΛΕΣΒΟ',
        d: 'ΣΑΜΟΘΡΑΚΗ',
        correct: 'd'
    }, {
        question: 'ΠΟΤΕ ΠΑΝΤΡΕΥΤΗΚΑΝΕ Η ΜΑΜΑ ΜΕ ΤΟΝ ΜΠΑΜΠΑ;',
        a: '26 ΔΕΚ 1982',
        b: '27 ΔΕΚ 1982',
        c: '26 ΔΕΚ 1981',
        d: '27 ΔΕΚ 1981',
        correct: 'a'
    }, {
        question: 'ΣΕ ΠΟΙΟ ΝΟΣΟΚΟΜΕΙΟ ΓΕΝΝΗΘΗΚΕ Η ΜΑΡΙΑ, Η ΣΟΦΙΑ ΚΑΙ Ο ΤΑΣΟΣ;',
        a: 'Uni-Klinik',
        b: 'Chirurgische Klinik',
        c: 'Frauen Klinik',
        d: 'Medizinische Klinik',
        correct: 'c'
    }, {
        question: 'ΠΟΣΑ ΞΑΔΕΡΦΙΑ ΕΧΕΙ Η ΜΑΜΑ;',
        a: '13',
        b: '14',
        c: '15',
        d: '16',
        correct: 'c'
    }, {
        question: 'ΠΟΣΑ ΧΡΟΝΩΝ ΗΤΑΝ Η ΜΑΜΑ ΟΤΑΝ ΠΑΝΤΡΕΥΤΗΚΕ;',
        a: '19',
        b: '18',
        c: '21',
        d: '20',
        correct: 'b'
    }, {
        question: 'ΠΟΥ ΗΤΑΝ Η ΠΡΩΤΗ ΔΟΥΛΕΙΑ ΤΗΣ ΜΑΜΑΣ;',
        a: 'ΚΑΝΤΙΝΑ',
        b: 'ΚΑΘΑΡΙΣΤΗΡΙΟ',
        c: 'SIEMENS',
        d: 'ΕΣΤΙΑΤΟΡΙΟ',
        correct: 'b'
    }, {
        question: 'ΠΟΥ ΕΓΙΝΕ Ο ΓΑΜΟΣ ΤΗΣ ΜΑΜΑΣ ΚΑΙ ΤΟΥ ΜΠΑΜΠΑ;',
        a: 'BONIFAZ KIRCHE',
        b: 'ΑΠΟΣΤΟΛΟΣ ΠΑΥΛΟΣ ΝΥΡΕΜΒΕΡΓΗ',
        c: 'SEBALDUSKIRCHE',
        d: 'CHRISTOFORUS KAPELLE',
        correct: 'a'
    }, {
        question: 'ΤΙ ΕΙΝΑΙ ΤΟ ΠΡΩΤΟ ΔΩΡΟ ΠΟΥ ΕΚΑΝΕ Ο ΜΠΑΜΠΑΣ ΤΗΝ ΜΑΜΑ;',
        a: 'ΜΙΑ ΓΟΥΝΑ',
        b: 'ΕΝΑ ΔΑΧΤΥΛΙΔΗ',
        c: 'ΜΙΑ ΚΑΤΣΙΚΑ',
        d: 'ΜΙΑ ΡΑΠΤΟΜΗΧΑΝΗ',
        correct: 'd'
    }, {
        question: 'ΤΙ ΒΑΘΜΟ ΑΠΟΛΥΤΗΡΙΟΥ ΕΧΕΙ Η ΜΑΜΑ;',
        a: '12.5',
        b: '13.5',
        c: '14.5',
        d: '15.5',
        correct: 'c'
    }, {
        question: 'ΣΕ ΠΟΙΟ ΝΟΣΟΚΟΜΕΙΟ ΓΕΝΝΗΘΗΚΕ Η ΜΑΜΑ;',
        a: 'ΡΩΣΣΙΚΟ ΝΟΣΟΚΟΜΕΙΟ ΘΕΣΣΑΛΟΝΙΚΗΣ',
        b: 'ΓΕΝΝΗΜΑΤΑΣ',
        c: 'ΑΧΕΠΑ',
        d: 'ΝΟΣΟΚΟΜΕΙΟ; ΤΙ ΕΙΝΑΙ ΑΥΤΟ;',
        correct: 'a'
    }, {
        question: 'ΣΕ ΠΟΙΟ ΝΟΣΟΚΟΜΕΙΟ ΓΕΝΝΗΘΗΚΕ Η ΜΑΜΑ;',
        a: 'ΡΩΣΣΙΚΟ ΝΟΣΟΚΟΜΕΙΟ ΘΕΣΣΑΛΟΝΙΚΗΣ',
        b: 'ΓΕΝΝΗΜΑΤΑΣ',
        c: 'ΑΧΕΠΑ',
        d: 'ΝΟΣΟΚΟΜΕΙΟ; ΤΙ ΕΙΝΑΙ ΑΥΤΟ;',
        correct: 'a'
    }, {
        question: 'ΠΩΣ ΦΩΝΑΖΕ Η ΜΑΜΑ ΤΗΝ ΘΕΙΑ ΒΑΓΓΕΛΙΩ;',
        a: 'ΜΥΞΟΦΟΥΣΚΑ',
        b: 'ΧΙΤΛΕΡ',
        c: 'ΒΑΓΓΕΛΗΣ Ο ΓΕΓΕΣ',
        d: 'ΜΟΥΧΛΑ',
        correct: 'c'
    }, {
        question: 'ΠΩΣ ΦΩΝΑΖΕ Η ΘΕΙΑ ΒΑΓΓΕΛΙΩ ΤΗΝ ΜΑΜΑ;',
        a: 'ΜΥΞΟΦΟΥΣΚΑ',
        b: 'ΧΙΤΛΕΡ',
        c: 'ΒΑΓΓΕΛΗΣ Ο ΓΕΓΕΣ',
        d: 'ΜΟΥΧΛΑ',
        correct: 'd'
    }, {
        question: 'ΠΟΙΟ ΕΙΝΑΙ ΤΟ ΠΡΩΤΟ ΔΩΡΟ ΠΟΥ ΕΚΑΝΕ Η ΜΑΜΑ ΤΟΝ ΜΠΑΜΠΑ;',
        a: 'ΠΟΥΛΟΒΕΡ',
        b: 'ΚΑΛΤΣΕΣ',
        c: 'ΜΠΟΥΦΑΝ',
        d: 'ΠΑΠΟΥΤΣΙΑ',
        correct: 'a'
    }, {
        question: 'ΠΟΣΑ ΠΡΩΤΑ ΞΑΔΕΡΦΙΑ ΕΧΕΙ Ο ΜΠΑΜΠΑΣ;',
        a: '10',
        b: '11',
        c: '12',
        d: '13',
        correct: 'c'
    }, {
        question: 'ΠΟΥ ΗΤΑΝ ΤΟ ΠΡΩΤΟ ΣΠΙΤΙ ΤΗΣ ΜΑΜΑΣ ΚΑΙ ΤΟΥ ΜΠΑΜΠΑ;',
        a: 'ΕΡΛΑΝΓΚΕΝ',
        b: 'ΝΥΡΕΜΒΕΡΓΗ',
        c: 'ΘΕΣΣΑΛΟΝΙΚΗ',
        d: 'ΕΛΕΟΘΣΑ',
        correct: 'a'
    }, {
        question: 'ΠΟΙΑ ΗΤΑΝΕ Η ΠΡΩΤΗ ΔΟΥΛΕΙΑ ΠΟΥ ΕΚΑΝΕ Ο ΜΠΑΜΠΑΣ ΕΡΑΣΙΤΕΧΝΙΚΑ;',
        a: 'ΚΤΗΝΟΤΡΟΦΟΣ',
        b: 'ΓΕΩΡΓΟΣ',
        c: 'ΟΙΚΟΔΟΜΟΣ',
        d: 'ΤΥΛΙΧΤΗΣ ΣΟΥΒΛΑΚΙΟΥ',
        correct: 'd'
    }, {
        question: 'ΠΟΙΑ ΗΤΑΝΕ Η ΠΡΩΤΗ ΔΟΥΛΕΙΑ ΠΟΥ ΕΚΑΝΕ Ο ΜΠΑΜΠΑΣ ΕΠΑΓΓΕΛΜΑΤΙΚΑ;',
        a: 'ΟΙΚΟΔΟΜΟΣ',
        b: 'ΒΕΝΖΙΝΑΣ',
        c: 'ΝΟΙΚΟΚΥΡΗΣ',
        d: 'ΣΚΟΥΠΑΣ',
        correct: 'd'
    }, {
        question: 'ΠΟΤΕ ΠΑΝΤΡΕΥΤΙΚΕ Η ΣΟΦΙΑ ΜΕ ΤΟΝ ΓΙΩΡΓΟ;',
        a: '2 ΣΕΠ 16',
        b: '3 ΣΕΠ 16',
        c: '4 ΣΕΠ 16',
        d: '1 ΣΕΠ 16',
        correct: 'a'
    }, {
        question: 'ΠΟΥ ΠΗΓΑΝΕ ΤΗΣ ΠΡΩΤΕΣ ΔΙΑΚΟΠΕΣ ΤΟΥΣ Η ΣΟΦΙΑ ΜΕ ΤΟΝ ΓΙΩΡΓΟ;',
        a: 'ΧΑΛΚΙΔΙΚΗ',
        b: 'ΚΡΗΤΗ',
        c: 'ΜΥΚΟΝΟ ΚΑΙ ΣΑΝΤΟΡΙΝΗ ',
        d: 'ΚΕΡΚΥΡΑ',
        correct: 'd'
    }, {
        question: 'ΠΟΥ ΓΝΩΡΙΣΤΗΚΑΝ Η ΣΟΦΙΑ ΜΕ ΤΟΝ ΓΙΩΡΓΟ;',
        a: 'ΚΛΑΣΙΚΟ ΚΑΦΕ ΚΟΥΦΑΛΙΑ',
        b: 'ΕΛΙΣΠΟΝΤΟΣ ΚΑΦΕ ΠΡΟΧΩΜΑ',
        c: 'ΜΠΙΤΖΙΛΗΣ ΚΑΦΕ ΕΛΕΟΥΣΑ',
        d: 'ΜΙΚΕΛ ΚΑΦΕ ΧΑΛΚΙΔΟΝΑ',
        correct: 'a'
    }, {
        question: 'ΠΟΙΟ ΕΙΝΑΙ ΤΟ ΠΡΩΤΟ ΔΩΡΟ ΑΠΟ ΤΗΝ ΣΟΦΙΑ ΠΡΟΣ ΤΟΝ ΓΙΩΡΓΟ;',
        a: 'ΚΑΛΤΣΕΣ',
        b: 'ΔΑΧΤΥΛΙΔΗ',
        c: 'ΧΑΝΤΟΥΚΕΝ',
        d: 'ΚΟΛΙΕ',
        correct: 'b'
    }, {
        question: 'ΠΟΙΟ ΕΙΝΑΙ ΤΟ ΠΡΩΤΟ ΔΩΡΟ ΠΟΥ ΕΚΑΝΕ Η ΣΟΦΙΑ ΣΤΗΝ ΜΑΜΑ;',
        a: 'ΕΝΑ ΛΟΥΛΟΥΔΙ',
        b: 'ΕΝΑ ΑΡΩΜΑ',
        c: 'ΕΝΑ ΠΙΑΤΟ',
        d: 'ΜΙΑ ΚΟΤΑ',
        correct: 'a'
    }, {
        question: 'ΤΙ ΑΠΟΛΥΤΗΡΙΟ ΛΥΚΕΙΟΥ ΕΧΕΙ Η ΣΟΦΙΑ;',
        a: '18',
        b: '17',
        c: '16',
        d: '15',
        correct: 'c'
    }, {
        question: 'ΤΙ ΒΑΘΜΟ ΠΤΥΧΙΟΥ ΕΧΕΙ Η ΣΟΦΙΑ;',
        a: '6.7',
        b: '7.0',
        c: '7.3',
        d: '7.5',
        correct: 'a'
    }, {
        question: 'ΠΟΥ ΠΗΓΕ ΠΡΩΤΗ ΦΟΡΑ ΔΙΑΚΟΠΕΣ ΜΟΝΗ ΤΗΣ Η ΣΟΦΙΑ;',
        a: 'ΧΑΛΚΙΔΙΚΗ',
        b: 'ΜΥΤΙΛΗΝΗ',
        c: 'ΚΡΗΤΗ',
        d: 'ΚΕΡΚΥΡΑ',
        correct: 'a'
    }, {
        question: 'ΠΟΙΟ ΕΙΝΑΙ ΤΟ ΑΓΑΠΗΜΕΝΟ ΧΡΩΜΑ ΤΗΣ ΣΟΦΙΑΣ;',
        a: 'ΠΡΑΣΙΝΟ/ΚΑΦΕ',
        b: 'ΚΙΤΡΙΝΟ/ΚΟΚΚΙΝΟ',
        c: 'ΡΟΖ/ΚΟΚΚΙΝΟ',
        d: 'ΜΠΛΕ/ΚΙΤΡΙΝΟ',
        correct: 'd'
    }, {
        question: 'ΤΙ ΗΠΙΕ Η ΣΟΦΙΑ ΣΤΟΝ ΓΑΜΟ ΤΗΣ;',
        a: 'ΚΡΑΣΙ',
        b: 'ΝΕΡΟ',
        c: 'ΤΣΙΠΟΥΡΟ',
        d: 'ΤΙΠΟΤΑ',
        correct: 'b'
    }, {
        question: 'ΠΟΥ ΕΚΑΝΕ ΤΟ ΠΡΩΤΟ ΤΟΥ ΜΠΑΝΙΟ Ο ΑΝΑΣΤΑΣΗΣ;',
        a: 'ΜΥΚΟΝΟ',
        b: 'ΧΑΛΚΙΔΙΚΗ',
        c: 'DUTZENDEICH',
        d: 'ΚΕΡΚΥΡΑ',
        correct: 'd'
    }, {
        question: 'ΠΟΥ ΕΚΑΝΕ ΤΟ ΠΡΩΤΟ ΤΟΥ ΜΠΑΝΙΟ Η ΣΟΦΙΑ;',
        a: 'ΠΟΤΙΔΕΑ',
        b: 'ΝΙΚΗΤΗ',
        c: 'DUTZENDEICH',
        d: 'ΜΑΥΡΗ ΘΑΛΑΣΣΑ',
        correct: 'a'
    }, {
        question: 'ΠΟΤΕ ΠΑΝΤΡΕΥΤΗΚΕ Η ΜΑΡΙΑ ΜΕ ΤΟΝ ΔΗΜΗΤΡΗ;',
        a: '7 JAN 2014',
        b: '8 JAN 2014',
        c: '9 JAN 2014',
        d: '10 JAN 2014',
        correct: 'a'
    }, {
        question: 'ΠΟΥ ΠΗΓΑΝΕ ΤΗΣ ΠΡΩΤΕΣ ΔΙΑΚΟΠΕΣ ΤΟΥΣ Η ΜΑΡΙΑ ΚΑΙ Ο ΔΗΜΗΤΡΗΣ;',
        a: 'ΜΥΚΟΝΟ',
        b: 'ΧΑΛΚΙΔΙΚΗ',
        c: 'ΘΑΣΟ',
        d: 'ΚΕΡΚΥΡΑ',
        correct: 'c'
    }, {
        question: 'ΠΟΥ ΓΝΩΡΙΣΤΗΚΑΝ Η ΜΑΡΙΑ ΜΕ ΤΟΝ ΔΗΜΗΤΡΗ;',
        a: 'ΜΥΡΙΣΕ ΘΑΛΑΣΣΑ',
        b: '40 ΚΥΜΑΤΑ',
        c: 'ΤΑ ΛΟΓΙΑ ΤΗΣ ΠΛΩΡΗΣ',
        d: 'ΜΕΖΕ ΜΕΖΕ',
        correct: 'a'
    }, {
        question: 'ΠΟΙΟ ΕΙΝΑΙ ΤΟ ΠΡΩΤΟ ΔΩΡΟ ΠΟΥ ΕΚΑΝΕ Ο ΔΗΜΗΤΡΗΣ ΤΗΝ ΜΑΡΙΑ;',
        a: 'ΠΑΝΤΟΦΛΕΣ',
        b: 'ΔΑΧΤΥΛΙΔΙ',
        c: 'ΣΕΣΟΥΑΡ',
        d: 'ΚΟΛΙΕ',
        correct: 'b'
    }, {
        question: 'ΠΟΙΟ ΕΙΝΑΙ ΤΟ ΠΡΩΤΟ ΔΩΡΟ ΠΟΥ ΕΚΑΝΕ Η ΜΑΡΙΑ ΤΗΝ ΜΑΜΑ;',
        a: 'ΛΟΥΛΟΥΔΙ',
        b: 'ΚΟΛΙΕ',
        c: 'ΠΑΠΟΥΤΣΙΑ',
        d: 'ΤΣΑΝΤΑ',
        correct: 'a'
    }, {
        question: 'ΤΙ ΑΠΟΛΥΤΗΡΙΟ ΛΥΚΕΙΟΥ ΕΧΕΙ Η ΜΑΡΙΑ;',
        a: '15.2',
        b: '16.2',
        c: '17.2',
        d: '18.2',
        correct: 'd'
    }, {
        question: 'ΤΙ ΒΑΘΜΟ ΠΤΥΧΙΟΥ ΕΧΕΙ Η ΜΑΡΙΑ;',
        a: '6.01',
        b: '7.01',
        c: '8.01',
        d: '9.01',
        correct: 'b'
    }, {
        question: 'ΠΟΙΟ ΕΙΝΑΙ ΤΟ ΑΓΑΠΗΜΕΝΟ ΧΡΩΜΑ ΤΗΣ ΜΑΡΙΑΣ;',
        a: 'ΚΟΚΚΙΝΟ',
        b: 'ΚΙΤΡΙΝΟ',
        c: 'ΜΠΛΕ',
        d: 'ΜΩΒ',
        correct: 'b'
    }, {
        question: 'ΠΟΥ ΕΚΑΝΕ ΤΟ ΠΡΩΤΟ ΤΟΥ ΜΠΑΝΙΟ Η ΕΥΑΓΓΕΛΙΑ;',
        a: 'ΜΥΚΟΝΟ',
        b: 'ΧΑΛΚΙΔΙΚΗ',
        c: 'DUTZENDEICH',
        d: 'ΚΕΡΚΥΡΑ',
        correct: 'd'
    }, {
        question: 'ΠΟΥ ΕΚΑΝΕ ΤΟ ΠΡΩΤΟ ΤΟΥ ΜΠΑΝΙΟ Η ΜΑΡΙΑ;',
        a: 'ΝΙΚΗΤΗ',
        b: 'ΚΑΛΛΙΚΡΑΤΕΙΑ',
        c: 'ΠΟΛΥΧΡΟΝΟ',
        d: 'ΣΑΡΤΗ',
        correct: 'a'
    },                                                                                                                     
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer'); 
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text'); 
const b_text = document.getElementById('b_text'); 
const c_text = document.getElementById('c_text'); 
const d_text = document.getElementById('d_text'); 
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}


function getSelected() {

    let answer = undefined;

    answerEls.forEach((answerEl) =>{
       if(answerEl.checked) {
           answer = answerEl.id;
       }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) =>{
        answerEl.checked = false;
     });
}

submitBtn.addEventListener("click", () => {
    
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>ΑΠΑΝΤΗΣΕΣ ΣΩΣΤΑ ΣΕ ${score}/${quizData.length} ΕΡΩΤΗΣΕΙΣ!</h2>
            
                <button onclick="location.reload()">ΠΑΙΞΕ ΞΑΝΑ</button>
            `;
        }
    }
});