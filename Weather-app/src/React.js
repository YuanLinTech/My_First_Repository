document.querySelector('[href="RESUME"]').addEventListener('click', changePage)

const changePage = () => {
    document.querySelector('.pages').forEach((p) => p.classList.remove('page--active'));
    document.querySelector('#resumePage').classList.add('page--active');

}

document.querySelector('#id').classList.add;

