// BONUS TASKS

/* 6. Vi har definerat en variabel som heter 'parallax' som hämtar
den första div:en från HTML:en med hjälp av dess id. Detta gör vi
för att vi ska kunna använda den här i vår JavaScript-fil. */

const parallax = document.getElementById("parallax")

/* 7. Nu ska vi använda en metod som heter addEventListener().
Vi ska använda den på den inbyggda window-variabeln för att kunna
reagera på när en användare scrollar. För att lösa detta behöver
du göra följande steg: */

// 7.a) Skriv namnet på den inbyggda variabeln vi ska använda
// 7.b) Lägg till en punkt och skriv sedan namnet på metoden
//      vi ska använda. Avsluta med parentes ()
// 7.c) Inuti parenteserna behöver vi beskriva vilken händelse
//      vi vill lyssna till. Skriv "scroll" inom parentes och lägg
//      till ett kommatecken.
// 7.d) Nu behöver vi skapa en funktion och det kan vi göra på två
//      olika sätt. Antingen med ordet 'function' eller genom att
//      skriva en pil-funktion. Det kan antingen se ut såhär inuti
//      din parentes:
//      ("scroll", function() {})
//      eller såhär:
//      ("scroll", () => {})

/* 8. Nu ska vi bestämma vad som ska hända när användaren scrollar!*/

// 8.a) Skapa en variabel och döp den till 'offset' inuti funktionskroppen
//      (funktionskroppen är allt inuti måsvingarna alltså {HÄR} )
// 8.b) Ge variabeln värdet window.pageYOffset. Det kommer vara lika med
//      antalet pixlar användaren har scrollat längs Y-axeln (vertikalt)

/* 9. Det sista steget är att vi ändrar på vår divs bakgrundsposition.
Detta göra vi genom att genom att ändra parallax-variabelns style-egenskap
'backgroundPositionY': parallax.style.backgroundPositionY. Den ska vara lika
med vår offset variabel, multiplicerat med ett nummer (ju högre nummer desto
snabbare scrollande). Glöm inte att lägga till enhet, t.ex. px eller procent:
offset * numberOfYourChoice + "px".

Du är färdig! Ser du parallax-effekten på första div:en nu? 🥳

Now you should see a parallax effect on the first div!
*/