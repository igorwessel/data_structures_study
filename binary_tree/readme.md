# Estudando arvore binaria

Basicamente toda arvore binaria obrigatoriamente tem que ter dois filhos e um nó raiz, que por convenção chamamos esses dois filhos de ESQUERDA e DIREITA, também todo nó pode ser considerado uma sub-arvore com os seus respectivos filhos (esquerda e direita) se esse nó não estiver ligado a outro nó basicamente temos outra arvore binaria e a partir dai chamamos essa estrutura de floresta.
Outro fator importante é que o nó que não tem filhos (todo nó tem dois filhos mas consideramos que não possui nenhum quando ambos não possui nenhum valor) chamamos esse nó de "folha".

                    A (nó raiz)
                   / \
    (sub-arvore)  B   C (folha)
                 / \
                D   E

## Altura, Profundidade e Caminhos

Caminho nada mais do que é uma sequência de nós que estão interligados, e sabendo disso conseguimos medir o caminho através das arestas ou pela quantidade de nó.

                    A
         aresta -> / \
                  B   C
                 / \ <- aresta
                D   E

    Para E chegar A contando pelas arestas temos duas, e contando pela quantidade de nó temos 3
    tanto faz como vai tu vai medir.

Profundidade de um nó nada mais do que é a distância (comprimento) até chegar a raiz da arvore, a profundidade de A no exemplo acima contando por nó é de 1 e por aresta é 0, com isso conseguimos definir a altura da arvore binaria e tambem do nó em si, por exemplo

                (3) A
                   / \
              (2) B   C
                 / \
                D   E (1)

    A altura da arvore é 3 (contando por nó), por que a folha mais profunda é o "E"
    também conseguimos saber a altura de cada nó contando o nó pelos seus descendentes
    por exemplo:

                    A
                   / \
              (1) B   C
                 / \
                D   E (2)

    A altura do nó "B" é 2 (contando por nó), a altura do nó "C" é 1 (contando por nó)
    é 1 devido não ter nenhum descendente.

Saber a altura é importante devido possibilitar a distribuição dos dados de maneira inteligente, já temos algumas coisas que queremos evitar por exemplo é que a distribuição de dados seja 1 por nivel, quando isso acontece chamamos isso de "zigue-zague" sempre vai obter a altura máxima da arvore binaria jogando fora basicamente todo benefício que a gente tem com a arvore binaria.

                    A                               A
                   / \                             /
                  B   C                           B
                 /     \                           \
                D       E                           C
                                                     \
                                                      D
                                                       \
                                                        E

    No exemplo a esquerda temos uma distribuição da mínima supondo que número de elementos a ser adicionado é 5,
    e a direita a mesma coisa só que distribuindo 1 por nivel alcançamos a altura máxima da arvore.

Tem algumas expressões matemáticas que usam basicamente para saber a mínima e máxima, apenas alguns exemplos

        mínima: (n) = 1 + log2 n
        máxima: (n) = n

## Percurso

Percuso na arvore nada mais do que é uma forma sistematica de passar por todos os nós, a gente não pode percorrer a arvore de qualquer maneira temos que seguir um padrão para fazer a passagem pelos nós, então podemos dizer que o percuso nada mais do que é uma visita ao nó quando digo visita uma operação a ser realizada naquele nó.

### Percurso Pós-Ordem

Vamos falar sobre o percurso PÓS-ORDEM, só conseguimos fazer uma visita a raiz quando a gente já percorreu todos os descendentes e outra coisa importante a ser lembrada é que o nó que caracteriza uma sub-arvore pode ser vista como a raiz daqueles respectivos nós, por exemplo:

                                                           A
                                                          / \
    (sub-arvore)(pode ser considerado a raiz do nó D)    C   B
                                                        /
                                                       D

Sempre que fomos utilizar o percurso PÓS-ORDEM sempre temos que olhar em todos os nós pela esquerda e depois a direita, tomando como o exemplo vamos supor que iremos usar o percurso pos-ordem para exibir os valores de cada nó e iremos utilizar como exemplo a arvore binaria acima, temos que descer para o nó C olhar se ele tem filho a esquerda se tiver descer para o filho a esquerda checar se esse filho tambem possui filho a esquerda e a direita se não tiver nenhum ai sim printar o valor, subimos para o nó anterior e verificamos se tem filho a direita se não tiver ai sim printar o valor do nó, e consequentemente seguindo a mesma lógica para todos os nós, consequentemente o ultimo nó a ser exibido é a raiz.
