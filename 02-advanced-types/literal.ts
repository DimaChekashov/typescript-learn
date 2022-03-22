function fetchWithAuth(url: string, method: 'post' | 'get'): 1 | -1 {
    return 1;
}

fetchWithAuth('some', 'get');

let a: "qwerty" = "qwerty";

const method = 'post';

fetchWithAuth(a, method);

let method_2 = 'post';

fetchWithAuth(a, method_2 as 'post');