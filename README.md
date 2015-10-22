# whatsapp-messages-parser
Parse whatsapp messages .txt log to JSON format


```
12/4/2012, 9:14 PM - John created group "The Beatles"
9/8/2014, 10:41 PM - You were added
9/8/2014, 11:07 PM - Paul McCartney: I've got an idea for a song:
Day after day,
Alone on the hill
A man with a foolish grin is keeping perfectly still
9/8/2014, 11:07 PM - George Harrison: Sounds cool.
9/8/2014, 11:08 PM - Ringo Starr: Dope.
19/29/2014, 12:33 PM - John Lennon: Alright lads, that's enough
```

→

```
[
  {
    "date": "12/4/2012, 9:14 PM",
    "sender": "system",
    "message": "John created group \"The Beatles\""
  },
  {
    "date": "9/8/2014, 10:41 PM",
    "sender": "system",
    "message": "You were added"
  },
  {
    "date": "9/8/2014, 11:07 PM",
    "sender": "Paul McCartney",
    "message": "I've got an idea for a song:\nDay after day,\nAlone on the hill\nA man with a foolish grin is keeping perfectly still"
  },
  {
    "date": "9/8/2014, 11:07 PM",
    "sender": "George Harrison",
    "message": "Sounds cool."
  },
  {
    "date": "9/8/2014, 11:08 PM",
    "sender": "Ringo Starr",
    "message": "Dope."
  },
  {
    "date": "19/29/2014, 12:33 PM",
    "sender": "John Lennon",
    "message": "Alright lads, that's enough"
  }
]
```
