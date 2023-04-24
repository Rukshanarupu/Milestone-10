/**
 * 1. authentication 
 * 2. authorization 
 * 3. sign in === login 
 * 4. sign up === register
 * 
 * 
 * 
 * 
 * 

Expression explanation:

    ^                         Start anchor
    (?=.*[A-Z].*[A-Z])        Ensure string has two uppercase letters.
    (?=.*[!@#$&*])            Ensure string has one special case letter.
    (?=.*[0-9].*[0-9])        Ensure string has two digits.
    (?=.*[a-z].*[a-z].*[a-z]) Ensure string has three lowercase letters.
    .{8}                      Ensure string is of length 8.
    $                         End anchor.
 * */ 