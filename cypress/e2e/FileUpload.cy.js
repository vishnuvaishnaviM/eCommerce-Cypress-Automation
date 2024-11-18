import 'cypress-file-upload';
describe('file upload',()=>{

    it('upload single file',()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("#singleFileInput").attachFile('file1.docx')
        cy.get("form[id='singleFileForm'] button[type='submit']").click()
        cy.get("#singleFileStatus").contains("file1.docx")

    })

    it('rename the uploaded file',()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("#singleFileInput").attachFile({filePath:'file1.docx', fileName:'newfile1.docx'})
        cy.get("form[id='singleFileForm'] button[type='submit']").click()
        cy.get("#singleFileStatus").contains("newfile1.docx")
    })

    it('upload the file using drag and drop',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#drag-drop-upload").attachFile("file1.docx",{subjectType:'drag-n-drop'})
        cy.get("div[class='dz-preview dz-file-preview dz-processing dz-success dz-complete'] div[class='dz-details'] span").contains('file1.docx')
    })

    it('upload multiple files',()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("#multipleFilesInput").attachFile(['file1.docx', 'file2.docx'])
        cy.get("form[id='multipleFilesForm'] button[type='submit']").click()
        cy.get("#multipleFilesStatus").contains("file1").contains("file2")
    })

    it('upload the file - shadow dom',()=>{
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm")
        cy.get('.smart-browse-input',{includeShadowDom:true}).attachFile('file1.docx')
        cy.get('.smart-item-name',{includeShadowDom:true}).contains('file1.docx')

    })
})