---
layout: page
lang: cs
title: Zásady ochrany osobních údajů
---

# Zásady ochrany osobních údajů

Poslední aktualizace: 21. listopadu 2026

Action Translation je aplikace pro iPhone a iPad, která překládá text pomocí poskytovatele AI podle vašeho výběru. Tyto zásady vysvětlují, co se při používání aplikace děje s vašimi údaji.

## Stručně

- Vývojář aplikace Action Translation vaše údaje neshromažďuje, nepřijímá ani neukládá. Aplikace nemá účty, servery, reklamy, analytiku ani sledování.
- Když spustíte překlad, text se odešle z vašeho zařízení přímo vybranému poskytovateli AI.
- Nastavení a klíče API zůstávají ve vašem zařízení. Historie překladů zůstává ve vašem zařízení a při zapnuté synchronizaci s iCloudem také ve vašem účtu iCloud.

## Co se odesílá poskytovateli AI

Přidáním klíče API v Nastavení povolujete aplikaci odesílat tomuto poskytovateli údaje popsané níže. Svolení odvoláte odstraněním klíče.

Dokud nespustíte překlad, neodesílá se nic. Po spuštění aplikace odešle přímo poskytovateli vybranému v Nastavení (Google, Anthropic nebo OpenAI):

- text, který chcete přeložit;
- pokyny k překladu včetně modelu, cílového jazyka, zdrojového jazyka, pokud jste ho vybrali, a jazyka rozhraní aplikace;
- váš klíč API, podle kterého vás poskytovatel identifikuje.

Jako každá internetová služba získává poskytovatel také technické údaje o připojení, například vaši IP adresu.

Poskytovatel tyto údaje zpracovává podle vlastních podmínek, zásad ochrany osobních údajů a vaší smlouvy s ním. Podmínky se mohou lišit podle tarifu: některé bezplatné tarify například poskytovateli umožňují používat odeslaný obsah ke zlepšování produktů. Než začnete překládat důvěrné nebo osobní informace, přečtěte si podmínky svého poskytovatele.

- [Zásady ochrany soukromí Google](https://policies.google.com/privacy) a [podmínky Gemini API](https://ai.google.dev/gemini-api/terms)
- [Zásady ochrany osobních údajů Anthropic](https://www.anthropic.com/legal/privacy)
- [Zásady ochrany osobních údajů OpenAI](https://openai.com/policies/privacy-policy/)

## Co zůstává ve vašem zařízení

- **Historie překladů:** posledních 50 překladů včetně zdrojového textu, výsledku, jazyků, modelu, data a doby odezvy. Starší překlady se automaticky mažou.
- **Nastavení:** poskytovatel, modely, cílový jazyk a nejpoužívanější jazyky.
- **Klíče API:** ukládají se do klíčenky iOS.

Aplikace a její rozšíření pro sdílení a pro příkaz Přeložit používají tyto údaje společně ve vašem zařízení. Nastavení a klíče API se nikam nesynchronizují; historie se synchronizuje jen přes váš iCloud, jak je popsáno níže. Tyto údaje mohou být podle nastavení iOS také součástí záloh zařízení.

## Synchronizace s iCloudem

Když je v nastavení zapnutá synchronizace s iCloudem (ve výchozím stavu je zapnutá), aplikace ukládá historii překladů do soukromé databáze iCloudu vašeho účtu Apple, takže historie je stejná na všech zařízeních přihlášených k tomuto účtu. Apple tyto údaje uchovává podle svých zásad ochrany osobních údajů; vývojář k nim nemá přístup. Nastavení a klíče API se nesynchronizují.

Pokud nejste přihlášeni k iCloudu nebo je iCloud pro aplikaci vypnutý, historie zůstává jen ve vašem zařízení. Synchronizaci zastavíte vypnutím synchronizace s iCloudem v nastavení; kopie, která už je v iCloudu, tam zůstane, dokud ji nesmažete.

## Obsah z jiných aplikací a přístup k zařízení

Rozšíření pro sdílení obdrží pouze text nebo odkaz, který se s ním rozhodnete sdílet. Aplikace zapisuje do schránky pouze po klepnutí na Kopírovat. Nežádá o přístup ke kontaktům, fotkám, poloze, mikrofonu ani fotoaparátu.

Pokud je Action Translation vaší výchozí aplikací pro překlad, příkaz Přeložit v jiných aplikacích jí předá pouze vybraný text a překlad začne okamžitě. Překlad se uloží do historie. Když klepnete na Nahradit, překlad se vrátí do dané aplikace místo vybraného textu.

## Smazání údajů

- Překlad smažete přejetím v historii.
- Při zapnuté synchronizaci s iCloudem se smazaný překlad smaže i z iCloudu a z vašich ostatních zařízení.
- Klíč API odstraníte vymazáním jeho pole v Nastavení.
- Smazáním aplikace se odstraní nastavení a historie v tomto zařízení. Historie v iCloudu zůstane: smažete ji v Nastavení > [vaše jméno] > iCloud > Spravovat úložiště > Action Translation smazáním jejích dat. iOS může po smazání aplikace zachovat položky klíčenky, proto nejprve vymažte klíče API.
- Pro přístup k údajům uloženým u poskytovatele AI nebo jejich smazání se obraťte na daného poskytovatele.

## Apple a tento web

Stahování z App Storu zajišťuje Apple podle vlastních zásad ochrany osobních údajů. Pokud v nastavení iOS povolíte sdílení analytických dat s vývojáři aplikací, může Apple vývojáři poskytovat zprávy o pádech a používání, které vás neidentifikují.

Spropitné v Nastavení je dobrovolný nákup v aplikaci. Platbu zpracovává Apple podle vlastních podmínek; vývojář nedostává žádné platební údaje a spropitné nic neodemyká.

Tento web je hostován na GitHub Pages a GitHub může zaznamenávat IP adresy návštěvníků. Samotný web nepoužívá cookies ani analytiku.

Pokaždé, když aplikaci otevřete nebo ji použijete z nabídky sdílení či příkazem Přeložit, stáhne z tohoto webu seznam modelů AI, které používá. Požadavek neobsahuje text, který překládáte, ani žádné osobní údaje, ale jako při každé návštěvě webu může GitHub zaznamenat vaši IP adresu.

## Děti

Vývojář vědomě neshromažďuje osobní údaje od nikoho, ani od dětí.

## Změny těchto zásad

Pokud se tyto zásady změní, nová verze bude zveřejněna na této stránce s novým datem.

## Kontakt

Máte-li dotazy, [založte issue na GitHubu](https://github.com/claustrofob/actiontranslation/issues). Issues jsou veřejné, proto do nich neuvádějte osobní údaje ani klíče API. Žádosti týkající se ochrany soukromí posílejte na [action.translation.app@gmail.com](mailto:action.translation.app@gmail.com).
