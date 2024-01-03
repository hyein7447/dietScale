const userHeight = document.querySelector('#height')
const userWeight = document.querySelector('#weight')
const goals = document.querySelector('#goals')
const result = document.querySelector('#result')
console.log(userHeight, userWeight, goals, result)

result.addEventListener('click',function(){
    // console.log('.')
    let normal_w = Number(userHeight.value-100)*0.9
    // console.log(normal_w) // 적정체중 계산 확인
    // console.log(userWeight.value-normal_w)
    let weight_input = Number(userWeight.value)
    userHeight.value = ""
    userWeight.value = ""
    goals.value = `적정 체중은 ${normal_w}kg 이며, ${weight_input-normal_w} kg 입니다.`
})