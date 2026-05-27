---
title: "Google Dorking and Cybersecurity"
category: research
tags: [OSINT, CTI, Google Dorking]
excerpt_custom: "What is a Google Dork? A comprehensive guide explaining all Google Dork parameters used in the fields of OSINT and CTI, as well as their role in cybersecurity."
---

![Google Dorking](/assets/img/posts/google-dorking-header.png)

## What Is a Google Dork?

**Google Dork** is a technique for performing searches on a search engine using specific parameters. It helps us find something faster among thousands of results; in this way, it saves time in research. In terms of its importance in cybersecurity, it is used in the fields of **OSINT** (Open-Source Intelligence) and **CTI** (Cyber Threat Intelligence). It works across different search engines.

## Google Dork Parametreleri

`site` — Searches for a specific site.
```
site:github.com
```

`inurl` — Performs a search on the URL.
```
inurl:"login.php"
inurl:"admin.php"
```

`allinurl` — Performs the same function as `inurl`; can be used with multiple words.

`intext` — Searches the page content.
```
intext:"vulnerability"
```

`allintext` — Same as `intext`; performs a separate search for each word.
```
allintext: cybersecurity analyst
```

`intitle` — Searches based on the content of the `<title>` tag in HTML pages. To search unindexed directories:
```
intitle:"index of" "Parent Directory"
```

`allintitle` — Works like `intitle` but returns results for all specified words.

`filetype` — Searches for specific file types.
```
filetype:pdf
```

`ext` — Same as `filetype`.
```
ext:pdf
ext:csv
```

`link` — Displays pages containing links to the specified URL.
```
link:acarsec.github.io
```

`+` — Combines multiple keywords.

`-` — Excludes the specified keywords.
```
intext:security -pentest
```

`|` — The logical OR operator.
```
security | analyst
```

`*` — Anything.
```
"how to * hacking"
```

`~` — Searches for synonyms of the specified term.

`“phrase”` — Finds content that exactly contains the given phrase.
```
“cybersecurity”
```

`cache` — Displays the cached version of the specified site.
```
cache:acarsec.github.io
```

`inanchor` — Finds keywords in the anchor text of page links.

`maps` — Returns information about the location you're searching for.

`books` — Returns results for the book you're searching for.

`info` — Contains information about the specified site.

`related` — Displays similar pages related to the specified site.

`daterange` — Filters by the specified date ranges.
```
daterange:startdate-enddate
```

`author` — Searches for an author.
```
author:Fyodor Dostoyevski
```

## Google Dorking in OSINT and CTI

Areas where Google Dorking contributes to cybersecurity:

- Information gathering
- Vulnerability detection
- Threat analysis
- Data breach detection

Better results come with more practice.

## Resources

- [Google Hacking Database](https://www.exploit-db.com/google-hacking-database)
- [Fast Google Dorks Scan](https://github.com/IvanGlinkin/Fast-Google-Dorks-Scan)
- [Dork Search](https://dorksearch.com/)
