# Computer Science

In Computer Science, we study computation and information.

For a programmer, developer, software engineer, whichever you prefer, the field of Computer Science can be a source of great use. However, it is not the bread and butter.

If we accept that Computer Science is a collection of theoretical disciplines, then we can also accept that for the average programmer for whom practicality is the primary concern, Computer Science is a helpful friend, but not the only thing needed to get the job done.

That being said, there are some incredibly useful aspects of Computer Science, that are helpful to understand for any programmer, and certainly not a disadvantage. In this chapter, we are going to cover some of these aspects.

## Information

### The binary numeral system

As far as the average programmer is concerned, information in the context of a computer program, starts at 0's and 1's and ends with a rich variety of data types ranging from media such as video, sound, imagery and more simpler things such as text and data.

So if you are up for it, continue reading and let's get into it.

0's and 1's refers to the binary representation of a number, meaning a number expressed in the base-2 numeral system. This is not nearly as daunting as it sounds, I promise.

Historically it is believed that humans use a decimal numeral system possibly because we have 10 fingers, decimus being latin for tenth. Interestingly, the ancient Sumerians used the sexagesimal numeral system, base 60, and chances are, you use it every day too, since this is the basis for our measuring of time, as well as angles and geographical coordinates. Think about it. 60 has twelve factors, 1, 2, 3, 4, 5, 6, 10, 12, 15, 30 and 60. That means you can split 60 many different ways, making it a useful system for keeping track of things.

Back to binary. In computers, we use the binary numeral system, because that is how we can represent information in computer hardware. Simply put, it means that something is either on or off. That's all good. But it gets better. When you combine multiple switches of on and off, which we can think of as their state, the combination of these states can be used to express ever larger numbers.

For the sake of simplicity, we will represent all our binary numbers in the examples below in sequences of 8, that means octet, usually word and of course a byte. We are going to read our binary numbers from right to left. That means that any 0's on the left are not significant.

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

$(0)_2 = (0)_{10}$

$(1)_2 = (1)_{10}$

$(10)_2 = (2)_{10}$

$(11)_2 = (3)_{10}$

$(100)_2 = (4)_{10}$

$(101)_2 = (5)_{10}$

$(110)_2 = (6)_{10}$

$(111)_2 = (7)_{10}$

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
