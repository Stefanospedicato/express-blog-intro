express-blog-intro
===
Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità sulla base di quello che impareremo.

Creiamo il progetto base con una rotta `/` che ritorna un testo semplice con scritto “Server del mio blog”

Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)

Creiamo poi una rotta `/bacheca` che restituisca un oggetto json con la lista dei post e il conteggio, partendo da un array.

Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.

Testare su postman o Thunder Client

## Svolgimento
- Ho creato innazitutto il mio file js iniziale e ho l'ho inizializzato con npm init.
- Ho installato express con il terminale e l'ho importato nel mio file.
- Ho importato poi l'app e la mia port.
- Seguendo la consegna ho creato un array di 5 oggetti con le rispettive proprietà su un nuovo file chiamato data.js nella cartella data.
- Ho poi creato la rotta "bacheca" che mi restituisce il json completo inizialmente con il conteggio dei post.
- Infine ho configurato gli asset statici e ho testato con il browser se effettivamente riuscissi a far comparire le mie immagini alla modifica del mio url.