'use strict';

// 1 task

    let btnFIrst = document.getElementById('btnFIrst');
    btnFIrst.addEventListener('click', function () {
        btnFIrst.style.background = '#151892';
    })


    let btnSec = document.getElementById('btnSec');
    btnSec.addEventListener('mouseenter', function () {
        btnTSec.style.background = '#151892';
    })

    btnSec.addEventListener('mouseleave', function () {
        btnSec.style.background = 'red';
    })


    let btnThird = document.getElementById('btnThird');
    btnThird.addEventListener('mouseleave', function () {
        btnThird.style.background = '#151892';
    })

    btnThird.addEventListener('mouseenter', function () {
        btnThird.style.background = 'red';
    })


// 2 task
    let btnColor = document.getElementById('btnColor');
    btnColor.addEventListener('keydown', function (event) {
        if (event.key.toLowerCase() === 'r') {
            btnColor.style.background = '#e85e5e';
        } else if (event.key.toLowerCase() === 'g') {
            btnColor.style.background = '#91e680';
        } else if (event.key.toLowerCase() === 'b') {
            btnColor.style.background = '#6480f0';
        }
    })

    btnColor.addEventListener('keyup', function (event) {
        btnColor.style.background = 'transparent';
    })

// 3 task
    let Block = document.getElementById('Block');
    let position = {
        x: 35,
        y: 35
    };

    function moveBlock() {
        Block.style.left = position.x + 'vw';
        Block.style.top = position.y + 'vh';
    }

    window.addEventListener('keydown', function (event) {
        switch (event.key.toLowerCase()) {
            case 'w':
                position.y -= 0.1;
                break;
            case 's':
                position.y += 0.1;
                break;
            case 'a':
                position.x -= 0.1;
                break;
            case 'd':
                position.x += 0.1;
                break;
        }
        moveBlock();
    });
