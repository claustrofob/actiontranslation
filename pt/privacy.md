---
layout: page
lang: pt
title: Política de Privacidade
---

# Política de Privacidade

Última atualização: 21 de novembro de 2026

O Action Translation é um app para iPhone e iPad que traduz textos com o provedor de IA que você escolher. Esta política explica o que acontece com seus dados quando você usa o app.

## Em resumo

- O desenvolvedor do Action Translation não coleta, não recebe e não armazena seus dados. O app não tem contas, servidores, anúncios, análises nem rastreamento.
- Quando você inicia uma tradução, seu texto é enviado diretamente do seu dispositivo para o provedor de IA selecionado.
- Seus ajustes e suas chaves de API ficam no seu dispositivo. Seu histórico de traduções fica no seu dispositivo e, com a sincronização com o iCloud ativada, na sua própria conta do iCloud.

## O que é enviado ao seu provedor de IA

Ao adicionar uma chave de API nos Ajustes, você permite que o app envie a esse provedor os dados descritos abaixo. Para retirar sua permissão, remova a chave.

Nada é enviado antes de você iniciar uma tradução. Quando você inicia, o app envia diretamente ao provedor selecionado nos Ajustes (Google, Anthropic ou OpenAI):

- o texto que você quer traduzir;
- as instruções de tradução, incluindo o modelo, o idioma de destino, o idioma de origem, se você tiver escolhido um, e o idioma da interface do app;
- sua chave de API, que identifica você junto ao provedor.

Como qualquer serviço de internet, o provedor também recebe dados técnicos de conexão, como seu endereço IP.

O provedor trata esses dados de acordo com os próprios termos e a própria política de privacidade, além do seu contrato com ele. Os termos podem variar conforme o plano: por exemplo, alguns planos gratuitos permitem que o provedor use o conteúdo enviado para melhorar os produtos dele. Consulte os termos do seu provedor antes de traduzir informações confidenciais ou pessoais.

- [Política de Privacidade do Google](https://policies.google.com/privacy) e [Termos da API Gemini](https://ai.google.dev/gemini-api/terms)
- [Política de Privacidade da Anthropic](https://www.anthropic.com/legal/privacy)
- [Política de Privacidade da OpenAI](https://openai.com/policies/privacy-policy/)

## O que fica no seu dispositivo

- **Histórico de traduções:** suas últimas 50 traduções, incluindo o texto original, o resultado, os idiomas, o modelo, a data e o tempo de resposta. As traduções mais antigas são apagadas automaticamente.
- **Ajustes:** seu provedor, seus modelos, o idioma de destino e os idiomas que você mais usa.
- **Chaves de API:** armazenadas no Keychain do iOS.

O app e as extensões dele, para compartilhamento e para o comando Traduzir, usam esses dados em conjunto no seu dispositivo. Os ajustes e as chaves de API não são sincronizados com nenhum lugar; o histórico é sincronizado apenas pelo seu iCloud, como descrito abaixo. Esses dados também podem ser incluídos em backups do dispositivo, de acordo com seus ajustes do iOS.

## Sincronização com o iCloud

Com a sincronização com o iCloud ativada nos ajustes (ela vem ativada), o app guarda seu histórico de traduções no banco de dados privado do iCloud da sua Conta Apple, então o histórico é o mesmo em todos os dispositivos conectados a ela. A Apple armazena esses dados de acordo com a própria política de privacidade; o desenvolvedor não tem acesso a eles. Os ajustes e as chaves de API não são sincronizados.

Se você não tiver uma sessão iniciada no iCloud, ou se o iCloud estiver desativado para o app, o histórico fica apenas no seu dispositivo. Para parar de sincronizar, desative a sincronização com o iCloud nos ajustes; a cópia que já está no iCloud continua lá até você apagá-la.

## Conteúdo de outros apps e acesso ao dispositivo

A extensão de compartilhamento recebe apenas o texto ou o link que você decidir compartilhar com ela. O app só grava na área de transferência quando você toca em Copiar. Ele não pede acesso aos seus contatos, fotos, localização, microfone ou câmera.

Se o Action Translation for seu app de tradução padrão, o comando Traduzir em outros apps passa a ele apenas o texto selecionado, e a tradução começa na hora. A tradução fica salva no seu histórico. Se você tocar em Substituir, a tradução volta para aquele app no lugar do texto selecionado.

## Como apagar seus dados

- Para apagar uma tradução, deslize-a no histórico.
- Com a sincronização com o iCloud ativada, uma tradução apagada também é apagada do iCloud e dos seus outros dispositivos.
- Para remover uma chave de API, limpe o campo dela nos Ajustes.
- Ao apagar o app, seus ajustes e o histórico daquele dispositivo são removidos. O histórico no iCloud continua: para apagá-lo, acesse Ajustes > [seu nome] > iCloud > Gerenciar Armazenamento > Action Translation e apague os dados. O iOS pode manter itens do Keychain depois que um app é apagado, então limpe suas chaves de API antes.
- Para acessar ou apagar dados mantidos pelo seu provedor de IA, entre em contato com ele.

## A Apple e este site

A Apple processa os downloads da App Store de acordo com a própria política de privacidade. Se você optar por compartilhar análises com desenvolvedores de apps nos ajustes do iOS, a Apple poderá fornecer ao desenvolvedor relatórios de falhas e de uso que não identificam você.

As gorjetas nos Ajustes são compras dentro do app opcionais. A Apple processa o pagamento de acordo com os próprios termos; o desenvolvedor não recebe dados de pagamento e a gorjeta não desbloqueia nada.

Este site está hospedado no GitHub Pages, e o GitHub pode registrar os endereços IP dos visitantes. O próprio site não usa cookies nem análises.

Sempre que você abre o app ou o usa pelo menu de compartilhamento ou pelo comando Traduzir, ele baixa deste site a lista de modelos de IA que usa. A solicitação não contém o texto que você traduz nem dados pessoais, mas, como em qualquer visita a um site, o GitHub pode registrar seu endereço IP.

## Crianças

O desenvolvedor não coleta intencionalmente dados pessoais de ninguém, incluindo crianças.

## Alterações nesta política

Se esta política mudar, a nova versão será publicada nesta página com uma nova data.

## Contato

Se tiver dúvidas, [abra uma issue no GitHub](https://github.com/claustrofob/actiontranslation/issues). As issues são públicas, então não inclua informações pessoais nem chaves de API. Para solicitações relacionadas à privacidade, envie um e-mail para [action.translation.app@gmail.com](mailto:action.translation.app@gmail.com).
