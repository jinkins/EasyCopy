function calcul()
{
    var somme;
    somme = 0;
    
    somme += pc();
    somme += printNB();
    somme += copyNB();
    somme += printC();
    somme += copyC();
    
    
    somme = Math.round(somme*100)/100;
    
    $("#montant").html(somme);
}

function pc()
{
    
    var somme, tempsPC, ripNB, ripC; 
    somme = 0;
    
    tempsPC = $('#tempsPC').val() / 1 ; 
    ripNB = $('#ripNB').val() / 1;
    ripC = $('#ripC').val() / 1;
    
    somme += tempsPC / 10 * 0.75; // Cout pour le pc 
    
    // Rip NB
    
    if(ripNB == 1)
    {
        somme += 1.25;
    }
        
    else if(ripNB > 1)
    {
        somme += 1.25 + 0.50 * (ripNB-1)   ;
    }
        
    else
    {
    // nothing
    }
    
    
    // Rip Couleur
    
    if(ripC == 1)
    {
        somme += 3;
    }
        
    else if(ripC > 1)
    {
        somme += 3 + 1.25 * (ripC-1);
    }
    
    else
    {
    // nothing
    }
    
    return somme;
}

function printNB()
{
          
    var somme, A4, A3, tarif;
    somme =0;
    
    tarif = $('input[type=radio][name=tarif]:checked').val();
    
    A4 = $('#printNBA4').val() / 1;
    A3 = $('#printNBA3').val() / 1; 
    
    if(tarif == "Aucun")
    {    

        if(A4 < 10)
        {
            somme += A4 * .08;
        }
        
        else if(A4 < 20)
        {
            somme += A4 * .07;
        }
        
        else if(A4 < 30)
        {
            somme += A4 * .06;
        }
        
        else if(A4 < 100)
        {
            somme += A4 * .05;
        }
    
        else if(A4 < 200)
        {
            somme += A4 * .045;
        }
    
        else if(A4 < 300)
        {
            somme += A4 * .04;
        }
        
        else if(A4 < 500)
        {
            somme += A4 * .035;
        }
        
        else if(A4 >= 500)
        {
            somme += A4 * .03;
        }
    
    
        // A3
    
        if(A3 < 10)
        {
            somme += A3 * .08 * 2;
        }
        
        else if(A3 < 20)
        {
            somme += A3 * .07 * 2;
        }
        
        else if(A3 < 30)
        {
            somme += A3 * .06 * 2;
        }
        
        else if(A3 < 100)
        {
            somme += A3 * .05 * 2;
        }
    
        else if(A3 < 200)
        {
            somme += A3 * .045 * 2;
        }
    
        else if(A3 < 300)
        {
            somme += A3 * .04 * 2;
        }
        
        else if(A3 < 500)
        {
            somme += A3 * .035 * 2;
        }
        
        else if(A3 >= 500)
        {
            somme += A3 * .03 * 2;
        }
    
    }
    
    else if(tarif == 'Memoire')
    {
        return .04 * (A4 + 2*A3);
    }
    
    else
    {
        alert("Erreur : aucune sélection de tarif");
    }
    
    return somme;
    
    
    
}

function printC()
{
    var A4, A3, tarif;
    
    A4 = $('#printCA4').val() / 1;
    A3 = $("#printCA3").val() / 1; 
    
    tarif = $('input[type=radio][name=tarif]:checked').val();
    
    if(tarif=='Aucun')
    {
        return .45 * ( A4 + A3 * 2 );  
    }
    
    else if(tarif == 'Memoire')
    {
        c = A4 + A3 * 2;
        
        if(c < 10)
        {
            return c * .45;
        }
        
        else if(c < 31)
        {
            return c * .4; 
        }
            
        else if(c < 101)
        {
            return c * .37;
        }
        
        else if(c < 201)
        {
            return c * .35;
        }
            
        else if(c < 400)
        {
            return c * .32;
        }
        else 
        {
            return c * .3;
        }
    }
}


function copyNB()
{
    prix = new Array(0,0.05,0.1,0.15,0.2,0.25,0.3,0.33,0.35,0.37,0.39,0.429,0.468,0.507,0.546,0.58,0.62,0.66,0.7,0.74,0.78,0.82,0.86,0.9,0.94,0.97,1.01,1.05,1.09,1.13,1.17,1.21,1.25,1.29,1.33,1.36,1.4,1.44,1.48,1.52,1.56,1.6,1.64,1.68,1.72,1.75,1.79,1.83,1.87,1.91,1.95,1.99,2.03,2.07,2.11,2.14,2.15,2.17,2.2,2.24,2.26,2.28,2.29,2.33,2.37,2.38,2.4,2.41,2.45,2.48,2.49,2.5,2.52,2.55,2.59,2.6,2.61,2.62,2.65,2.69,2.7,2.71,2.72,2.74,2.77,2.78,2.79,2.8,2.82,2.85,2.86,2.87,2.88,2.9,2.91,2.93,2.95,2.97,2.98,2.99,3);
    
    var nb = $('#copyNBA4').val();
    
    console.log(nb);
    
    if(nb < 101)
    {
        return prix[nb]; 
    }
        
    else if(nb < 500)
    {
        return nb * .028;
    }
    else if(nb < 700)
    {
        return nb * .24;
    }
        
    else if(nb < 850)
    {
        return nb * .24
    }
            
    else 
    {
        alert("Photocopies trop nombreuses.");
    }
}


function copyC()
{
    return 0;
}

function misea0()
{
    $("#montant").html(0);
}