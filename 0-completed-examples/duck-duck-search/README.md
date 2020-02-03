# Duck Duck Search

As a student I can enter terms and search them so that each day I learn a little more.

## DOM

| tag name | attributes | role |
| --- | --- | --- |
| `<section>` | `id='user-interface'` | the section that contains all user interface elements |
| `<form>` | `class='search-form'` | this is the form that will host all user interactions |
| `<input>` | `type='search'`, `name='query'`, `class='input-field'` | this is where users will type their questions |
| `<input>` | `type='button'`, `id='user-action'` | a user will click this to trigger a search |

## Styling

| class name | description | role |
| --- | --- | --- |
| `input-field` | sets the dimensions of the search input | ensures the input is at a practical size for the user |
| `search-form` | centers the form on the screen | users have a clean visual experience |

## Listeners

| type | attached to | callback |
| --- | --- | --- |
| `click` | `id='user-action'` | `searchHandler` |

## Handlers

| syntax | parameters | return value | behavior |
| --- | --- | --- | --- |
| `searchHandler(triggeredEvent)` | _Event_: user-triggered event | _Boolean_: true | process user query from an event, create a search URL, open it a new tab, log the action & return `true` to the browser |

## Logic

| syntax | parameters | return value | behavior |
| --- | --- | --- | --- |
| `generateSearchURL(searchQuery)` | searchQuery (_String_): the search query | _String_: a search URL | this function takes in a query, encodes it, and appends it to an empty search URL |
