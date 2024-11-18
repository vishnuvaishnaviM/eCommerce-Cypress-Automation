describe('handling tables',()=>{

    //hooks - beforeEach that runs before each testcase
    beforeEach('Login',()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
    })

    //to count total number of rows and columns in a table
    it('count total number of rows and columns in a table',()=>{
        cy.get("#productTable>tbody>tr").should('have.length',5) //rows count
        cy.get("#productTable>thead>tr>th").should('have.length',4)

    })

    //check specific data from a specific row and column
    it('read data from specific cell',()=>{
        cy.get("#productTable>tbody>tr:nth-child(3)>td:nth-child(2)").contains('Tablet')
    })

    //read all data from first page
    it('read data in the first page',()=>{
        cy.get("#productTable>tbody>tr") //get all rows
            .each(($row, index, $rows)=>{  //track each row
                cy.wrap($row).within(()=>{  //wrap data in each row that contains many columns
                    cy.get("td").each(($col,index,$cols)=>{  //track columns in each row
                        cy.log($col.text())
                    })
                })
            })
    })

    
    //pagination
    it('pagination',()=>{
        //count total number of pages
        cy.get(".pagination>li").its('length').then((pagecount)=>{
            cy.log("total number of pages "+pagecount)
            for(let i=1;i<=pagecount;i++){
                if(pagecount>1){
                    cy.log("active page is "+ i);
                    cy.get(".pagination>li:nth-child("+i+")").click()
                    cy.get("#productTable>tbody>tr")
                        .each(($row, index, $rows)=>{
                            cy.wrap($row).within(()=>{
                                cy.get("td:nth-child(2)").each(($col,index,$cols)=>{
                                    cy.log($col.text())
                                })
                            })
                        })
                }
            }
        })
        
        
        
    })

})