# Alegrosz

tworzenie komponentu

HTTP
kody błędów:

1. info errors
2. success errors - np. podpięcie css
3. readirect errors - np. not modified (nie wyłączyłam cache z przeglądarki),
4. client errors - np. bad request -złe dane, 401- nie wysłałam autentyfikacji użytkownika
5. backend errors

REST API!!!

rest Api wymaga HTTP
oparty o HTPP:
methods
status codes
ednpoints

URL

-   protokół komnikacyjny https:// (s to szyfrowanie secure layer)
-   www - rodzaj zasobu, strona internetowa
-   subdomain
-   domena
-   com - domena najwyższego poziomu
-   endpoint/path/source (np. .pl/products)

    metody:
    get pobranie
    post - stworzenie czegoś
    put / patch - modyfikowwanie
    delete - usunięcie

-   po ? zmienna, np. s="" - wszystko to nie jest interpretowane przez przeglądarkę
    zmienne oddziela się &; query params
-   / na końcu to konkretny fragment

## algorytm do edycji

-   tworze nowy komponent do edycji (pusty)
-   podpinam do routera
-   w product detail muszę zrobić przekierowanie na komponent edycji (Link)
-   w komponencie edycji robię formularz
-   pobieram dane z serwera po id i wypełniam formularz
-   użytkownik po edycji klika w zapisz
-   wysyłamy dane do serwera
-   robimy przekierowanie na stronę tego produktu
