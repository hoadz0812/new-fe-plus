$(()=>{
    $('#myForm').submit(e => {
        const ten = $('#madv').val().trim()
        const gia = $('#tendv').val().trim()
        const des = $('#dongia').val().trim()

        if(ten.length === 0){
            showError('Vui lòng nhập tên món ăn')
            e.preventDefault();
        }
        else if(gia.length===0){
            showError('Vui lòng nhập giá')
            e.preventDefault();
        }
        else if(des.length===0){
            showError('Vui lòng nhập miêu tả')
            e.preventDefault();
        }
    })
})

function showError(message){
    $('.errorMessage').html(message)
    $('.errorMessage').show(message)
}
