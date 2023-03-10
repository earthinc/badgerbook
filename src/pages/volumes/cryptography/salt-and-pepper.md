# Salt &amp; Pepper

This chapter discusses two techniques commonly used for storing information in databases to render the data useless without either the salt or the pepper. In cryptography, entropy (or "chaos") and secrets are important ingredients for creating a successful and secure system. Let's clarify these metaphors.

## The Salt

A salt is a crucial piece of data that is used to strengthen the security of passwords or other user-provided secrets. The salt is randomly generated and cryptographically secure, meaning that it is almost impossible to guess or reproduce. This salt is combined with the user-provided secret before hashing it, which makes the password more difficult to crack.

Hashing is the process of transforming data into a fixed-length output, called a hash, using a mathematical algorithm. The most common hashing functions are MD5 (Message-Digest 5) and SHA (Secure Hash Algorithm). By using a hashing function, we can create a unique digital fingerprint of any data, regardless of its size. This unique fingerprint can be used to verify the integrity of the data or to compare it with other data without revealing the original input.

One of the most important features of a hashing function is its collision resistance. This means that it is highly unlikely for two different inputs to produce the same output hash. In other words, if you change even a single character in the input data, the resulting hash will be completely different. This makes it very difficult for attackers to guess the original input data based on the hash.

Let's consider the example below.

$\text{MD5}(\text{Badger Book}) = \text{c6c5a4668a40edb4602453473da02b65}$

$\text{MD5}(\text{Monster Truck}) = \text{8a605f40255c3318503aa7d456c9d5cd}$

$\text{MD5}(\text{Humble and Kind}) = \text{71a506c2ce7544a766ca24b9948dcca8}$

$\text{MD5}(\text{Dancing Queen}) = \text{e3d4fbd68e86ba3b87f77ab58cd80885}$

Imagine that the text on the left-hand side are passwords used for an online banking system, and the incomprehensible sequences of letters and text on the right-hand side represent the hashed passwords of those users stored in the database. This is a good security practice to protect customers' passwords, but there is still a problem.

If the database is compromised, whoever has access to it can see the MD5 hashes of the bank customers' passwords. This is bad, but the situation could be even worse if the passwords were not hashed. In that case, the attacker could see the plaintext passwords and potentially use them elsewhere if the user has a bad habit of reusing passwords across multiple services.

However, for someone clever enough to obtain a private database, figuring out the plaintext version of the passwords is not that difficult. All they have to do is create a large list of possible combinations of letters, numbers, and special characters along with their MD5 equivalent. This list is known as a rainbow table, and by doing a lookup in that database, the attacker can easily find the plaintext password.

The question now becomes, how we do secure our selves again that? And the answer is to salt the password. Let me explain.

By adding a salt to the plaintext password, we change the input given to the hashing function, and therefor we change the output. This means that any precomputed list of hashes, e.g. the rainbown tables, are unusable because they must be recreated for every possible salt, and there are effectively endless salts to choose from.

Examine how a salt changes the output of our previous hashes.

$\text{MD5}(\text{Blue Badger Book}) = \text{113baa4c537f02ce0eb309584b33aa36}$

$\text{MD5}(\text{Giant Monster Truck}) = \text{8031d2c3c10b8f750ba92b41c693bfb0}$

$\text{MD5}(\text{Very Humble and Kind}) = \text{cf3cee62ea369861b96f664578f6651d}$

$\text{MD5}(\text{Dancing Queen of the Night}) = \text{270f346bc878ef45080b30a26fae3d82}$

As you can see, by adding a salt to our inputs, the output changes completely. A salt can be applied in many different ways. The methods used vary from applying a salt over and over again to the output of the hashing function it self. You may prepend or append the salt or apply it in any other way, as long as you do so consistently for that particular input. This means, as you can see in the examples above, that the salt does not have to be the same for every system, and can even be stored along side the hashed value in the database. This may introduce some other problems or make things easier for bad actors, but as we'll discuss next, we have ways we can make that harder too.
