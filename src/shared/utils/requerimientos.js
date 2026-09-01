const THERMOGENESIS_CONSTANT = 1.1;

//helper function - calcula bmr con formula de Mifflin-St Jeor (1990)
export function calculateMifflinBmr(weight, height, age, gender){
    //gender
    gender = gender[0].toUpperCase();
    //height
    if(height < 10){
        height = height * 100;
    }
    //bmr calculo
    if(gender === 'M'){
        return (10*weight) + (6.25*height) - (5*age) + 5;
    }else{
        return (10*weight) + (6.25*height) - (5*age) - 161;
    }
}

export function calculateBodyMassIndex(weight, height){
    if(height < 10){
        height = height * 100;
    }
    const bmi = weight / ((height/100)*(height/100))
    return bmi;
}

//helper function - calcula bmr con formula de Carrasco (2002)
export function calculateCarrascoBmr(weight, height, gender){
    //gender
    gender = gender[0].toUpperCase();
    //height
    if(height < 10){
        height = height * 100;
    }
    //bmi
    const bmi = calculateBodyMassIndex(weight, height)
    //bmr calculo
    if(gender === 'M'){
        if(bmi < 25){
            return weight * 23.6;
        }else if(bmi < 30){
            return weight * 20;
        }else if(bmi < 40){
            return weight * 19;
        }else{
            return weight * 17;
        }
    }else{
        if(bmi < 25){
            return weight * 20.7;
        }else if(bmi < 30){
            return weight * 19.7;
        }else if(bmi < 40){
            return weight * 18.3;
        }else{
            return weight * 16.2;
        }
    }
}

//helper function - calcula bmr
export function calculateBmr({weight, height, gender, age, athlete, somatotype }){
    //convertir height a cm
    if(height < 10){
        height = height * 100;
    }
    //gender
    gender = gender[0].toUpperCase();
    //bmi
    const bmi = calculateBodyMassIndex(weight, height);
    //bmr inicial
    let bmr = 0;
    //bmr calculo
    if(age > 18){ //>18
        if(athlete){ //deportista
            if(bmi < 25){ //NP
                bmr = calculateMifflinBmr(weight, height, age, gender);
            }else{ //SP u OB
                if(somatotype == 'MESO' || somatotype == 'MESOECTO'){
                    bmr = calculateMifflinBmr(weight, height, age, gender);
                }else if(somatotype == 'MESOENDO'){
                    bmr = (calculateCarrascoBmr(weight, height, gender) + calculateMifflinBmr(weight, height, age, gender))/2;
                }else{
                    bmr = calculateCarrascoBmr(weight, height, gender);
                }
            }
        }else{ //no es deportista (o por hobby)
            bmr = calculateCarrascoBmr(weight, height, gender);
        }
    }else{ // <18 - FAO/OMS/UNU (1985)
        if(gender === 'M'){
            switch(true){
                case age < 10:
                    bmr = (22.706*weight) + 504.3;
                    break;
                default:
                    bmr = (17.686*weight) + 658.2;
                    break;
            }
        }else if(gender === 'F'){
            switch(true){
                case age < 10:
                    bmr = (22.315*weight) + 485.9;
                    break;
                default:
                    bmr = (13.384*weight) + 692.6;
                    break;
            }
        }
    }
    return bmr;
}

//helper function - calcula get
export function calculateTotalEnergyExpenditure({weight, height, gender, age, physicalActivityLevel, athlete, somatotype}){
    const bmr = calculateBmr({weight, height, gender, age, athlete, somatotype});
    const tee = bmr * (1 + (physicalActivityLevel -1) + (THERMOGENESIS_CONSTANT -1));
    return Math.round(tee);
}

//calcula req - contempla definit/superavit
export function calculateRequirements({weight, height, gender, age, physicalActivityLevel, goal, athlete, somatotype}){

    const tee = calculateTotalEnergyExpenditure({ weight, height, gender, age, physicalActivityLevel, athlete, somatotype});

    if(height < 10){
        height = height * 100;
    }

    const bmi = calculateBodyMassIndex(weight, height);

    const protein = () => {
        if(bmi < 25){
            return weight * 1.6;
        }else if(somatotype == 'ECTO' || somatotype == 'MESOECTO' || somatotype == 'MESO'){
            return weight * 1.6; //peso real
        }else if(somatotype == 'MESOENDO'){
            const adjustedWeight = 25 * ((height/100)*(height/100));
            return adjustedWeight * 1.6; //reajuste con imc 25
        }else{
            const adjustedWeight = 23.5 * ((height/100)*(height/100));
            return adjustedWeight * 1.6; //reajuste con imc 23.5
        }
    }

    const carbohydrate = () => {
        let cho = 0;
        let choGrPerKg = 0;
        if (goal == 'definicion'){
            cho = (tee * 0.55)/4;
            choGrPerKg = cho/weight;
            if(cho/weight >= 3){
                return cho;
            }else{
                cho = weight * 3;
                return cho;
            }
        } else if (goal == 'volumen'){
            cho = ((tee * 0.5)/4) ;
            choGrPerKg = cho/weight;
            if(cho/weight <= 5){
                return cho;
            }else{
                cho = weight * 5;
                return cho;
            }
        } else {
            return ((tee * 0.5)/4) ;
        }
    }

    const fat = () => {
        return ((tee - (carbohydrate() * 4) - (protein() * 4))/9)
    }

    const requirements = {
        calories: tee,
        protein: protein(),
        carbohydrate: carbohydrate(),
        fat: fat(),
    }

    return requirements;

}
