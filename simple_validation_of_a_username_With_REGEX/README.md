Write a simple regex to validate a username. Allowed characters are:

lowercase letters,
numbers,
underscore
Length should be between 4 and 16 characters (both included).

So I was passing everything but the second to last.  I was returning a true, but it wanted a false because there was a space in the answer.  Adding a dollar sign made it continue reading through the space and returning as false.  where when I didnt add the $ it was stopping at the space and returning true.  