let interface = document.querySelector('.pin__interface');
        let keypad = document.querySelectorAll('.pin__keypad__key');

        keypad.forEach(key => {
            key.addEventListener('click', () => {
                if ( key.textContent === 'C') {
                    clearInterface(interface)
                }
                else if (key.textContent === '⌫') {
                    delFunc(interface)
                }
                else if (key.textContent === '↵') {
                    alert('You are welcome ;)');
                }
                else if (interface.innerHTML.length < 4) {
                    interface.innerHTML += key.textContent;
                    pasView(interface);
                }
            })

        });
        // functions
        function pasView(elem){
            let k = elem.textContent.length
            for (let i = 0; i < k; i++) {
                elem.textContent = elem.textContent.replace(elem.textContent[i], "*")
            }
        }
        function clearInterface(elem){
            elem.innerHTML = '';
            console.log('cl interface');
            
        }
        function delFunc(elem){
            elem.textContent = elem.textContent.slice(0,-1)
        }