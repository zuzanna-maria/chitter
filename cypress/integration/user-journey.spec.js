describe("User journey tests:", function(){

    beforeEach(function() {
        cy.task("resetDb")
        cy.task("resetUser")
        cy.task("seedExampleUser")
        cy.task("seedDb")
      })



    it("See cheeps on index page even if not signed in", function(){
        cy.visit('/')
        cy.get('#cheeps').should('contain','a test cheep')
    })

    it("Display timestamps and usernames", function(){
        cy.visit('/')
        cy.get('#cheeps').should('contain','random_user_1')
        cy.get('#cheeps').should('contain','Mon May 10 2021 10:30')
    })

    it("Can't make post if not signed in", function(){
        cy.visit('/homepage')
        cy.url().should('eq', 'http://localhost:3000/')
        cy.visit('/newpost')
        cy.url().should('eq', 'http://localhost:3000/')
    })

    it("Sign up", function(){
        cy.visit('/')
        cy.get('#sign-up-link').should('contain','Sign Up')
        cy.get("#sign-up-link").click()
        cy.get('#email-textbox').type("example@gmail.com")
        cy.get('#name-textbox').type("Example User")
        cy.get('#username-textbox').type("example_username")
        cy.get('#password-textbox').type("password")
        cy.get('#submit-button').click()
    })


      it("Go to homepage, see cheeps, make post button, sign out button", function(){
        cy.visit('/')
        cy.get('#sign-up-link').should('contain','Sign Up')
        cy.get("#sign-up-link").click()
        cy.get('#email-textbox').type("example@gmail.com")
        cy.get('#name-textbox').type("Example User")
        cy.get('#username-textbox').type("example_username")
        cy.get('#password-textbox').type("password")
        cy.get('#submit-button').click()
        cy.get('#Continue').click()
        cy.get('#cheeps').should('contain','a test cheep')
        cy.get('#newcheep').should('contain','Make new cheep')
        cy.get('#signout-form').should('contain','Sign Out')
      })



      it("Sign out", function(){
        cy.visit('/')
        cy.get('#sign-up-link').should('contain','Sign Up')
        cy.get("#sign-up-link").click()
        cy.get('#email-textbox').type("example@gmail.com")
        cy.get('#name-textbox').type("Example User")
        cy.get('#username-textbox').type("example_username")
        cy.get('#password-textbox').type("password")
        cy.get('#submit-button').click()
        cy.get('#Continue').click()
        cy.get('#sign-out-button').click()
        cy.get('#sign-up-link').should('contain','Sign Up')
      })


    it("Sign in", function(){
      cy.visit('/')
      cy.get('#sign-up-link').should('contain','Sign Up')
      cy.get("#sign-up-link").click()
      cy.get('#email-textbox').type("example@gmail.com")
      cy.get('#name-textbox').type("Example User")
      cy.get('#username-textbox').type("example_username")
      cy.get('#password-textbox').type("password")
      cy.get('#submit-button').click()
      cy.get('#Continue').click()
      cy.get('#sign-out-button').click()
      cy.visit('/')
      cy.get('#sign-in-link').click()
      cy.get('#email-textbox').type("example@gmail.com")
      cy.get('#password-textbox').type("password")
      cy.get('#submit-button').click()
    })


    it("Make new post", function(){
      cy.visit('/')
      cy.get('#sign-up-link').should('contain','Sign Up')
      cy.get("#sign-up-link").click()
      cy.get('#email-textbox').type("example@gmail.com")
      cy.get('#name-textbox').type("Example User")
      cy.get('#username-textbox').type("example_username")
      cy.get('#password-textbox').type("password")
      cy.get('#submit-button').click()
      cy.get('#Continue').click()
      cy.get("#newcheep").click()
      cy.get("#cheep-box").type("second test cheep")
      cy.get("#cheep-button").click()
    })

    it("Displays posts in reverse chronological order", function(){
      cy.visit('/')
      cy.get('#sign-up-link').should('contain','Sign Up')
      cy.get("#sign-up-link").click()
      cy.get('#email-textbox').type("example@gmail.com")
      cy.get('#name-textbox').type("Example User")
      cy.get('#username-textbox').type("example_username")
      cy.get('#password-textbox').type("password")
      cy.get('#submit-button').click()
      cy.get('#Continue').click()
      cy.get("#newcheep").click()
      cy.get("#cheep-box").type("this cheep was written first and will display last")
      cy.get("#cheep-button").click()
      cy.get("#newcheep").click()
      cy.get("#cheep-box").type("this cheep was written second and will display first")
      cy.get("#cheep-button").click()
      cy.get("#cheep-0").should('contain', 'this cheep was written second and will display first')
      cy.get("#cheep-1").should('contain', 'this cheep was written first and will display last')
    })

})
