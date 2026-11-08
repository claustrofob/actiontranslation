---
layout: page
lang: sv
title: Integritetspolicy
---

# Integritetspolicy

Senast uppdaterad: 8 november 2026

Action Translation är en app för iPhone och iPad som översätter text med den AI-leverantör du väljer. Den här policyn förklarar vad som händer med dina data när du använder appen.

## I korthet

- Utvecklaren av Action Translation samlar inte in, tar inte emot och lagrar inte dina data. Appen har inga konton, servrar, annonser, analysverktyg eller spårning.
- När du startar en översättning skickas texten direkt från din enhet till den AI-leverantör du har valt.
- Din översättningshistorik, dina inställningar och API-nycklar stannar på din enhet.

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

Appen och dess delningstillägg använder dessa data tillsammans på din enhet. Appen synkroniserar dem inte med någon server, men de kan ingå i säkerhetskopior av enheten beroende på dina iOS-inställningar.

## Innehåll från andra appar och åtkomst till enheten

Delningstillägget tar bara emot den text eller länk som du väljer att dela med det. Appen skriver bara till urklipp när du trycker på Kopiera. Den ber inte om åtkomst till dina kontakter, bilder, din plats, mikrofon eller kamera.

## Radera dina data

- Svep på en översättning i historiken för att radera den.
- Töm fältet för en API-nyckel i Inställningar för att ta bort den.
- När du raderar appen tas historiken och inställningarna bort. iOS kan behålla objekt i nyckelringen efter att en app har raderats, så rensa dina API-nycklar först.
- Kontakta din AI-leverantör för att få tillgång till eller radera data som leverantören har sparat.

## Apple och den här webbplatsen

Apple hanterar nedladdningar från App Store enligt sin egen integritetspolicy. Om du väljer att dela analysdata med apputvecklare i dina iOS-inställningar kan Apple ge utvecklaren krasch- och användningsrapporter som inte identifierar dig.

Den här webbplatsen finns på GitHub Pages, och GitHub kan logga besökares IP-adresser. Webbplatsen använder inga egna cookies eller analysverktyg.

## Barn

Utvecklaren samlar inte medvetet in personuppgifter från någon, inklusive barn.

## Ändringar i den här policyn

Om policyn ändras publiceras den nya versionen på den här sidan med ett nytt datum.

## Kontakt

Om du har frågor kan du [skapa ett ärende på GitHub](https://github.com/claustrofob/actiontranslation/issues). Ärenden är offentliga, så ange inte personuppgifter eller API-nycklar. Skicka integritetsförfrågningar till [action.translation.app@gmail.com](mailto:action.translation.app@gmail.com).
