#### Volume I: Computer Science

## Binary numerals

Computer programs process vast amounts of information. As far as the average programmer is concerned, information in the context of a computer program starts with 0's and 1's and ends with a rich variety of data types ranging from media such as video, sound, and imagery to simpler things such as text and data.

Don't let the binary representation of numbers intimidate you. It simply means expressing a number in the base-2 numeral system. This might sound daunting, but I assure you that it is not nearly as complex as it might seem.

Historically, humans have used a decimal numeral system. This is possibly because we have ten fingers, with "decimus" being Latin for tenth. Interestingly, the ancient Sumerians used the sexagesimal numeral system, base 60, which is still used today as the basis for measuring time, angles, and geographical coordinates. With twelve factors, 60 can be divided in many different ways, making it a useful system for keeping track of things.

In computers, we use the binary numeral system because that is how we can represent information in computer hardware. Simply put, it means that something is either on or off. When we combine multiple switches of on and off, which we can think of as their state, the combination of these states can be used to express ever larger numbers.

To keep things simple, we will represent all binary numbers in the examples below in sequences of 8. This sequence is called an octet, a word, or a byte. When reading binary numbers, we read them from right to left. Any 0's on the left are not significant.

I hope this information helps you gain a better understanding of binary numerals and why they are used in computer programming.

$(00001010)_2 = (10)_{10}$

The expression above is a fancy way of writing numbers along with their base notation, it follows the formula as seen below.

$(number)_{base}$

Anyway, the expression shows that the binary number 00001010 is the same as the decimal number 10. The question is, how do we arrive at that?

We have our byte, 00001010, and starting from the right, we see that we have a 0, 1, 0 and 1, while the rest of 0's. Those last 0's we can ignore because they do not impact the number. They are there because we are working with bytes, and they usually come in sequences of 8. The other 4 digits though, we refer to them as our significant bits.

There are a couple of things we can already tell about our number. We know that it is not larger than 15, because we would need more than 4 significant bites to do so, because the possible combinations of 4 binary digits is 16.

$2^4 = 2 * 2 * 2 * 2 = 16$

As you can see above, to find number of permutations we have to combine binary digits, i.e. we have 4 digits that can be either on or off, 1 or 0, that gives us 16 different combinations. Just like 1 digit would give us 2 permutations, either 0 or 1.

$2^1 = 2 * 1 = 2$

That one reads similarly, I am finding the number of times I can have two different permutations based on the number of digits available to me.

We can use this knowledge to start creating binary numbers. Let's explore how that looks for a binary number with 4 digits.

$(0000)_2 = (0)_{10}$

$(0001)_2 = (1)_{10}$

$(0010)_2 = (2)_{10}$

$(0011)_2 = (3)_{10}$

$(0100)_2 = (4)_{10}$

$(0101)_2 = (5)_{10}$

$(0110)_2 = (6)_{10}$

$(0111)_2 = (7)_{10}$

$(1000)_2 = (8)_{10}$

$(1001)_2 = (9)_{10}$

$(1010)_2 = (10)_{10}$

$(1011)_2 = (11)_{10}$

$(1100)_2 = (12)_{10}$

$(1101)_2 = (13)_{10}$

$(1110)_2 = (14)_{10}$

$(1111)_2 = (15)_{10}$

Looking down this line of expressions, we can see a pattern starting to emerge. If a binary digit is set to 1, we can use that information, along with its position counting from the right to find our number. For example, we can expand $1011$ as seen below.

$(1011)_2 = (2^3) + (2^1) + (2^0) =  8 + 2 + 1 = 11$

At this point I suggest you give it a try on your own.

1. Pick a binary number of any size.
2. Parameterize the number following the formula seen above.
3. Verify your result.
