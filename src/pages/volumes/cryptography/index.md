# Cryptography

Cryptography has its roots in ancient times. The earliest example of cryptography that comes to mind is a Caesar cipher. But before discussing that, let's delve into cryptography a bit more.

Cryptography is the study of information security. It is a keystone in the modern age of information. Since the internet is open and public, we use cryptography to create privacy and establish trust.

Now, let's return to the Caesar cipher. This cryptographic technique is named after Gaius Julius Caesar, a Roman statesman and general from the 1st century BC. At this point in time, the Romans had adopted Latin, a classical language using the Latin alphabet.

Caesar wrote a lot and used written notes to communicate with his allies and subordinates. In order to do so with privacy, he employed a cryptographic technique where the letters in the alphabet used were shifted by some number of letters to the right. We refer to this shift value as the key.

Let's us examine a Caesar cipher using a key of 23.

```
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
X Y Z A B C D E F G H I J K L M N O P Q R S T U V W
```

The only thing that happened here, is that in order to encode a piece of text using the cipher, we shift the actual value by the key, and substitute the letter.

Here's an example.

```
THE BADGER BOOK IS GREAT
QEB YXADBO YLLH FP DOBXQ
```

Awesome.

- [Salt &amp; Pepper](/volumes/cryptography/salt-and-pepper)
