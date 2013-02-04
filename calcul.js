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
        
        if(c < 30)
        {
            return c * .4;
        }
                
        else if(c < 100)
        {
            return c * .35
        }
                    
        else 
        {
            return c * .3;
        }
    }
}


function copyNB()
{
    return 0; 
}


function copyC()
{
    return 0;
}

function misea0()
{
    $("#montant").html(0);
}