# Google Search

This basic web page redirects all searches directly to google

## DOM

| tag name | attributes | role |
| --- | --- | --- |
| `<section>` | `id='user-interface'` | the section that contains all user interface elements |
| `<form>` | `class='formulaire'` | this is the form that will host all user interactions |
| `<input>` | `type='search'`, `name='query'`, `id='search-it'` `class='user-input'` | where a user can type their queries |

## Styling

| class name | description | role |
| --- | --- | --- |
| `formulaire` | centers the form on the screen | users have a clean visual experience |
| `user-input` | sets the dimensions of the search input | ensures the input is at a practical size for the user |

## Listeners

| type | attached to | callback |
| --- | --- | --- |
| `blur` | `id='search-it'` | `gooooogle` |

## Handlers

| syntax | parameters | return value | behavior |
| --- | --- | --- | --- |
| `gooooogle(triggeredEvent)` | _Event_: user-triggered event | _Boolean_: true | process user query from an event, create a search URL, open it a new tab, log the action & return `true` to the browser |

## Logic

| syntax | parameters | return value | behavior |
| --- | --- | --- | --- |
| `googleURL(searchQuery)` | searchQuery (_String_): the search query | _String_: a search URL | this function takes in a query, embeds it in a google search URL, and returns it |
