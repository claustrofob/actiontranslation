---
layout: page
lang: sv
title: Integritetspolicy
---

# Integritetspolicy

Senast uppdaterad: 21 november 2026

Action Translation är en app för iPhone och iPad som översätter text med den AI-leverantör du väljer. Den här policyn förklarar vad som händer med dina data när du använder appen.

## I korthet

- Utvecklaren av Action Translation samlar inte in, tar inte emot och lagrar inte dina data. Appen har inga konton, servrar, annonser, analysverktyg eller spårning.
- När du startar en översättning skickas texten direkt från din enhet till den AI-leverantör du har valt.
- Dina inställningar och API-nycklar stannar på din enhet. Din översättningshistorik stannar på din enhet och, med iCloud-synkronisering på, i ditt eget iCloud-konto.

## Vad som skickas till din AI-leverantör

Genom att lägga till en API-nyckel i Inställningar tillåter du appen att skicka de data som beskrivs nedan till den leverantören. Ta bort nyckeln för att återkalla ditt tillstånd.

Inget skickas förrän du startar en översättning. När du gör det skickar appen följande direkt till den leverantör som har valts i Inställningar (Google, Anthropic eller OpenAI):

- texten du vill översätta;
- översättningsinstruktionerna, inklusive modell, målspråk, källspråk om du har valt ett och språket i appens gränssnitt;
- din API-nyckel, som identifierar dig hos leverantören.

Som alla internettjänster tar leverantören också emot tekniska anslutningsdata, till exempel din IP-adress.

Leverantören behandlar dessa data enligt sina egna villkor och sin integritetspolicy samt ditt avtal med leverantören. Villkoren kan skilja sig mellan olika abonnemang: vissa kostnadsfria abonnemang tillåter till exempel att leverantören använder inskickat innehåll för att förbättra sina produkter. Läs leverantörens villkor innan du översätter konfidentiell eller personlig information.

- [Googles integritetspolicy](https://policies.google.com/privacy) och [villkor för Gemini API](https://ai.google.dev/gemini-api/terms)
- [Anthropics integritetspolicy](https://www.anthropic.com/legal/privacy)
- [OpenAI:s integritetspolicy](https://openai.com/policies/privacy-policy/)

## Vad som stannar på din enhet

- **Översättningshistorik:** dina senaste 50 översättningar, inklusive källtext, resultat, språk, modell, datum och svarstid. Äldre översättningar raderas automatiskt.
- **Inställningar:** din leverantör, dina modeller, ditt målspråk och de språk du använder mest.
- **API-nycklar:** lagras i iOS-nyckelringen.

Appen och dess tillägg för delning och för kommandot Översätt använder dessa data tillsammans på din enhet. Inställningar och API-nycklar synkroniseras ingenstans; historiken synkroniseras bara via din iCloud, som beskrivs nedan. Dessa data kan också ingå i säkerhetskopior av enheten beroende på dina iOS-inställningar.

## iCloud-synkronisering

Med iCloud-synkronisering på i inställningarna (den är på som standard) sparar appen din översättningshistorik i den privata iCloud-databasen för ditt Apple-konto, så att historiken är densamma på alla enheter som är inloggade med det. Apple lagrar dessa data enligt sin egen integritetspolicy; utvecklaren har ingen åtkomst till dem. Inställningar och API-nycklar synkroniseras inte.

Om du inte är inloggad i iCloud, eller om iCloud är avstängt för appen, stannar historiken bara på din enhet. Stäng av iCloud-synkronisering i inställningarna för att sluta synkronisera; kopian som redan finns i iCloud ligger kvar tills du raderar den.

## Innehåll från andra appar och åtkomst till enheten

Delningstillägget tar bara emot den text eller länk som du väljer att dela med det. Appen skriver bara till urklipp när du trycker på Kopiera. Den ber inte om åtkomst till dina kontakter, bilder, din plats, mikrofon eller kamera.

Om Action Translation är din förvalda översättningsapp får den bara den markerade texten från kommandot Översätt i andra appar, och översättningen startar direkt. Översättningen sparas i din historik. Om du trycker på Ersätt skickas översättningen tillbaka till den appen i stället för den markerade texten.

## Radera dina data

- Svep på en översättning i historiken för att radera den.
- Med iCloud-synkronisering på raderas en översättning du raderar även från iCloud och från dina andra enheter.
- Töm fältet för en API-nyckel i Inställningar för att ta bort den.
- När du raderar appen tas inställningarna och historiken på den enheten bort. Historiken i iCloud finns kvar: för att radera den, gå till Inställningar > [ditt namn] > iCloud > Hantera lagring > Action Translation och radera dess data. iOS kan behålla objekt i nyckelringen efter att en app har raderats, så rensa dina API-nycklar först.
- Kontakta din AI-leverantör för att få tillgång till eller radera data som leverantören har sparat.

## Apple och den här webbplatsen

Apple hanterar nedladdningar från App Store enligt sin egen integritetspolicy. Om du väljer att dela analysdata med apputvecklare i dina iOS-inställningar kan Apple ge utvecklaren krasch- och användningsrapporter som inte identifierar dig.

Dricks i Inställningar är frivilliga köp inuti appen. Apple hanterar betalningen enligt sina egna villkor; utvecklaren får inga betalningsuppgifter och dricks låser inte upp något.

Den här webbplatsen finns på GitHub Pages, och GitHub kan logga besökares IP-adresser. Webbplatsen använder inga egna cookies eller analysverktyg.

Varje gång du öppnar appen eller använder den via delningsmenyn eller kommandot Översätt hämtar den listan över AI-modeller som den använder från den här webbplatsen. Begäran innehåller ingen text som du översätter och inga personuppgifter, men som vid alla webbplatsbesök kan GitHub logga din IP-adress.

## Barn

Utvecklaren samlar inte medvetet in personuppgifter från någon, inklusive barn.

## Ändringar i den här policyn

Om policyn ändras publiceras den nya versionen på den här sidan med ett nytt datum.

## Kontakt

Om du har frågor kan du [skapa ett ärende på GitHub](https://github.com/claustrofob/actiontranslation/issues). Ärenden är offentliga, så ange inte personuppgifter eller API-nycklar. Skicka integritetsförfrågningar till [action.translation.app@gmail.com](mailto:action.translation.app@gmail.com).
