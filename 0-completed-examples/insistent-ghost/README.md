# Insistent Ghost

As a user I can write words and have them appear magically like I was using CAPSLOCK.  Still not sure why this is helpful.

## DOM

| tag name | attributes | role |
| --- | --- | --- |
| `<section>` | `id='user-interface'` | the section that contains all user interface elements |
| `<form>` | `id=ghost-container` | contains the input/output elements so I can handle user actions as an event |
| `<textarea>` | `id=user-input`, `name=input`, `class=editor`, `form=ghost-container` | this textarea is where a user types to have their words converted to upper-case |
| `<pre>` | `id=output` | transformed user output will be displayed in this 'pre' |

## Styling

| class name | description | role |
| --- | --- | --- |
| `.editor` | sets size of the user input element | ensures the user input textarea is practical to use |
| `.input-output` | positions the user interface | centers everything for a symmetrical UI |

## Listeners

| type | attached to | callback |
| --- | --- | --- |
| `keyup` | `id='user-input'` | `capsLockHandler` |

## Handlers

| syntax | parameters | return value | behavior |
| --- | --- | --- | --- |
| `capsLockHandler(anEvent)` | Event: the event which triggered the handler | Boolean: should the browser continue as normal? | reads the current value from the input textarea, converts all lower-case letters to upper-case ones, and displays the result to the user.  Then logs this action for the developer |

## Logic

| syntax | parameters | return value | behavior |
| --- | --- | --- | --- |
| `capsLock(aString)` | aString (_String_): the string to be caps-locked | String: a string with all lower-case letters converted to upper-case letters | takes in a string, converts lower-case letters to upper-case ones, and leaves everything else the same |
