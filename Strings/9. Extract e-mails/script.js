/**
 * Created by NoName on 6/7/2015.
 */
/**
 * 9. Extract e-mails
 *
 * Write a function for extracting all email addresses from given text.
 * All sub-strings that match the format @… should be recognized as emails.
 * Return the emails as array of strings.
 * */

var input = 'Hello my name is Pesho, and I have some e-mail addresses ' +
            'pesho@gmail.com and other e-mail is: pesho.petrov@abv.bg, ' +
            'my girlfriend have e-mail maria.ivanova@microsoft.com';

console.log(getEmail(input));

function getEmail(text) {
        var words = input.split(' '),
            i,
            emails = [];
        for(i = 0; i < words.length; i+=1){
            if(words[i].indexOf('@') > 0){
                emails.push(words[i]);
            }
        }
    return emails;
    }
