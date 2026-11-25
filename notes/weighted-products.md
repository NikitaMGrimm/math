# Weighted multiplicative shrinking targets on the scalar diagonal

Let \(b_i\ge2\) be integers, \(\alpha_i>0\), \(y_i\in\mathbb T\), and
\[
W(y,\psi)=\{x\in[0,1]:\prod_{i=1}^k\|b_i^n x-y_i\|^{\alpha_i}<\psi(n)
\text{ infinitely often}\}.
\]
Write \(\kappa_i=\log b_i\), \(N_i=b_i^n\), \(\lambda_A=\log\gcd_{i\in A}b_i\), and
\(\rho_n=-\log\psi(n)/n\), with natural logarithms. All dimension statements hold locally on every nonempty relatively open interval. Zero-weight factors can be omitted. We assume at least one positive weight, since with no positive weights the product is \(1\).

**Results.** For every fixed target, the exact dimension is given by limiting proximity of translated grid centers within a partition and linear inequalities on its radii. For coprime bases and for the homogeneous target the answer reduces to a finite recursion in the bases and weights, evaluated at the lower exponential order of \(\psi\). The coprime answer also gives the dimension for almost every target in any integer bases. For two bases the only extra term at an arbitrary target is an explicit function of a single phase and its joint accumulation points with \(\rho_n\).

## 1. Exact formula at arbitrary targets

Keep the levels with \(\psi(n)>0\). If only finitely many remain, \(W=\varnothing\). On the remaining levels cap \(\psi\) at \(1\), which preserves the level sets, and let \(\tau\) be the lower limit of \(\rho_n\) over these levels. If \(\tau=0\), the dimension is \(1\). If \(\tau=+\infty\), it is \(0\). The set is a dense \(G_\delta\) whenever infinitely many levels remain. At a retained level each individual root grid is contained in the open product target, so every tail union is dense by the grid spacing. These statements allow oscillating sequences, including sequences that vanish on infinitely many levels.

The endpoint dimension assertions follow from one-grid bounds. For any fixed \(i\), the one-grid inequality \(\|N_i x-y_i\|<e^{-u n}\), \(u>0\), has local dimension \(\kappa_i/(\kappa_i+u)\) on any infinite subsequence. The upper bound covers by \(O(N_i)\) intervals of length \(O(e^{-(\kappa_i+u)n})\). For the lower bound, enlarging the intervals to their \(s\)th powers for \(s<\kappa_i/(\kappa_i+u)\) gives full coverage at every sufficiently late selected level, so mass transference applies. For \(\tau=0\) use a subsequence with \(\rho_n\to0\) and let \(u\downarrow0\). For \(\tau=\infty\), a product hit forces at least one fractional rate \(-n^{-1}\log\|N_i x-y_i\|\) to exceed any fixed \(u\) at sufficiently late levels. Let \(u\to\infty\) in the upper bound. The same one-grid union bound gives Lebesgue measure zero at \(\tau>0\), and also for some subexponential \(\psi\), such as \(e^{-\sqrt n}\), by summing the level measures \(O(\psi(n)^{1/\sum_i\alpha_i})\). [Beresnevich–Velani, Theorem 2](https://doi.org/10.4007/annals.2006.164.971)

Assume \(0<\tau<\infty\) for the formula. Choose a nonempty active set \(I\), strictly positive fractional rates \(r_i\) on it, and a partition \(\mathcal P\) of \(I\). Put \(t_i=\kappa_i+r_i\), \(T_A=\max_{i\in A}t_i\), and \(h_A\in A\) with \(t_{h_A}=T_A\). Call these data admissible if both conditions below hold.

1. Along some infinite subsequence of positive levels, there are roots \(z_{i,n}\in(y_i+\mathbb Z)/N_i\) satisfying
   \[
   \liminf_n\frac{-\log|z_{i,n}-z_{h_A,n}|}{n}\ge t_i\quad
   (A\in\mathcal P,\ i\in A\setminus\{h_A\}),
   \qquad \limsup_n\rho_n\le\sum_{i\in I}\alpha_i r_i.
   \tag{1}
   \]
   The subsequence is common to all blocks and to \(\rho_n\). An exact equality of roots has exponent \(+\infty\). In a block \(A\) with pivot \(h=h_A\), the whole vector of differences must be chosen at once from the affine lattice
   \[
   \left(\frac{y_i}{N_i}-\frac{y_h}{N_h}\right)_{i\in A\setminus\{h\}}
   +\prod_{i\in A\setminus\{h\}}N_i^{-1}\mathbb Z
   -N_h^{-1}\mathbb Z\,\mathbf 1.
   \]
   The same last integer fixes the pivot in every coordinate. For example, both grids of denominator \(2^n\) with targets \(0,1/3\) are individually contained in the zero-target \(6^n\) grid. They are separated from each other by at least \(2^{-n}/3\), so simultaneous pivot differences of size \(o(2^{-n})\) are impossible. The choice among tied pivots is immaterial by the triangle inequality.
2. Every collection \(\mathcal C\subseteq\mathcal P\) of at least two blocks satisfies
   \[
   \sum_{A\in\mathcal C}T_A-\max_{A\in\mathcal C}T_A
   \ \le\ \sum_{A\in\mathcal C}\lambda_A-\lambda_{\cup\mathcal C}.
   \tag{2}
   \]

For these data define
\[
d(\mathcal P,T)=
1-\max_{x\in\{T_A:A\in\mathcal P\}}
\frac{\sum_{A:T_A\le x}(T_A-\lambda_A)}{x}.
\]
Then
\[
\boxed{\displaystyle \dim_{\rm H}W(y,\psi)=
\sup_{\text{admissible }(I,r,\mathcal P)} d(\mathcal P,T)_+.}
\tag{3}
\]
The formula permits weak inequalities at the cost comparisons and rate boundaries. For use below, \(d\ge s\), \(0\le s\le1\), is equivalent to
\[
\sum_{A\in\mathcal C}T_A-(1-s)\max_{A\in\mathcal C}T_A
\ \le\ \sum_{A\in\mathcal C}\lambda_A
\qquad(\varnothing\ne\mathcal C\subseteq\mathcal P).
\tag{4}
\]
In fact, all losses \(T_A-\lambda_A\) are nonnegative, so the worst collection with any given maximum exponent contains the entire prefix up to that exponent. The left side of (4) is nondecreasing in each \(T_A\).

For a fixed partition and choice of pivots, one can precompute the joint cluster set of \(\rho_n\) and the normalized root-difference exponents in (1), allowing all tuples with absolute differences at most \(1\) at each level. This uses finitely many difference tuples per level. At a cluster point, the difference exponents are upper bounds on the corresponding \(t_i\), and \(\rho\) is a lower bound on \(\sum_i\alpha_i(t_i-\kappa_i)\). To test whether \(d\ge s\), fix an order of the block maxima \(T_A\). Then (2), (4), the \(t_i\)-bounds, and the condition \(t_i\le T_A=t_{h_A}\) are all linear. Thus the target-dependent optimization is a finite family of linear feasibility tests at each point of this explicitly defined joint cluster set.

### Lower bound

Fix data with \(d>0\) and take \(B\) of largest \(T_B\). For sufficiently small \(\epsilon>0\) use effective exponents \(U_A=T_A-\epsilon\) for \(A\ne B\) and \(U_B=T_B-\epsilon+K\epsilon\). Choose \(K\) so that \(K\alpha_{h_B}>\sum_{i\in I}\alpha_i+2\). Each \(U_A>\lambda_A\). Decreasing all exponents by \(\epsilon\) makes each inequality (2) strict, by a margin of at least \((|\mathcal C|-1)\epsilon\). Increasing \(U_B\) keeps the left side of every affected inequality unchanged since \(B\) is already a maximizer.

Fix the root differences from (1) at each selected level. Within \(A\), the possible pivot centers with these same differences form a translate of the grid of step \((\gcd_{i\in A}N_i)^{-1}\). Indeed, two valid choices differ by a common increment belonging to every grid in the block, and each such increment gives another choice. Impose a window of radius \(e^{-U_A n}\) about these pivot centers. A simultaneous effective hit gives
\[
\|N_i x-y_i\|\le 2e^{-(r_i-\epsilon)n}\quad(i\in I),\qquad
\|N_{h_B}x-y_{h_B}\|<e^{-(r_{h_B}+(K-1)\epsilon)n}
\]
at sufficiently late selected levels. The bounds follow from (1) and the distance to the pivot. The weighted product over \(I\) is \(O(e^{-n(\sum_{i\in I}\alpha_i r_i+2\epsilon)})<\psi(n)\) there. The omitted factors are at most \(1\).

The effective grids are supported at the same finite set of primes and have arbitrary level-dependent translations. The strict comparisons give the singleton hypothesis of Paper #2's lower bound on the chosen subsequence. The effective limsup has local dimension at least \(d(\mathcal P,U)\) for small \(\epsilon\). Formula (4) or the finite maximum over all collections shows \(d(\mathcal P,U)\to d(\mathcal P,T)\) as \(\epsilon\downarrow0\). This proves the lower bound. Recentring at a root, then tightening a largest exponent, is what enforces the strict product inequality even when (1) is saturated. [Paper #2, Proposition \(\mathrm{singleton\text{-}lower}\)](paper/multibase-shrinking-targets.tex#L515)

### Upper bound

On a bounded open interval where the product limsup has dimension larger than \(s>0\), remove the finitely many one-grid limsups having fractional rate at least \(C\), for \(C\) so large that each has dimension below \(s\). The remaining set still has dimension larger than \(s\). For each of its points all fractional rates are eventually below \(C\). At its product hits their weighted sum is at least \(\rho_n\), so only bounded \(\rho_n\) remain.

For mesh size \(\epsilon>0\), round the fractional rates down to multiples \(r_i^{(\epsilon)}\) of \(\epsilon\), omit zero entries, and use fractional radii \(2e^{-r_i^{(\epsilon)}n}\) on the others. Every product hit under consideration belongs to such a rectangle at an eligible level \(\rho_n\le\sum_i\alpha_i r_i^{(\epsilon)}+\epsilon\sum_i\alpha_i\). There are finitely many rectangles. At least one rectangle limsup, taken over its eligible levels, has dimension larger than \(s\). Its active set is nonempty for small \(\epsilon\) since \(\tau>0\).

Paper #2's translated profile theorem applied to that limsup gives a partition and compatible center differences along a subsequence, with overlap exponents \(\sigma_A\ge T_A^{(\epsilon)}=\max_{i\in A}(\kappa_i+r_i^{(\epsilon)})\), strict merger comparisons, and \(d(\mathcal P,\sigma)>s\). Replacing \(\sigma_A\) by \(T_A^{(\epsilon)}\) preserves (4) and the strict form of (2) by monotonicity of their left sides. Nonempty overlaps imply \(|z_{i,n}-z_{h_A,n}|\le4e^{-n(\kappa_i+r_i^{(\epsilon)})}\) when \(h_A\) is an index of largest physical exponent. [Paper #2, Theorem \(\mathrm{profile}\)](paper/multibase-shrinking-targets.tex#L118)

Send \(\epsilon\to0\) along a sequence. Pass to a subsequence with fixed activity, partition and pivots and convergent rate vector, and select an increasing sequence of actual levels from the corresponding profiles. These selected levels satisfy (1) for the limiting rates and (2), (4) hold by continuity. If some rates vanish, discard their axes and omit empty blocks. In a surviving block the new \(T_A\) can only decrease and the new \(\lambda_A\) can only increase. For a collection of surviving blocks, at each prime the increase of the minimum valuation across the collection is at most the sum of the increases of the individual block minima. Thus the right side of (2) cannot decrease and (4) is preserved as well. If the old pivot was discarded, take a surviving pivot of largest \(t_i\). The triangle inequality through the old pivot proves (1) for the new pivot. At least one rate remains positive by \(\tau>0\). The data have \(d\ge s\), giving (3).

## 2. Finite optimization for the homogeneous, coprime and almost-every-target cases

For \(s\in(0,1)\), enumerate ordered sequences of disjoint nonempty index sets \(A_1,\ldots,A_m\). For each sequence calculate
\[
T_0=0,\qquad T_j=\frac{\lambda_{A_j}-(1-s)T_{j-1}}s,\qquad
F_{(A_j)}(s)=\sum_{j=1}^m\sum_{i\in A_j}\alpha_i(T_j-\kappa_i).
\tag{5}
\]
Keep the sequences with \(T_j>\max_{i\in A_j}\kappa_i\) for every \(j\). Write \(F_{\rm all}(s)\) for the maximum reward and \(F_{\rm sing}(s)\) for the maximum restricted to singletons. Then for \(0<\tau<\infty\)
\[
D_{\rm sing}(\tau)\ \le\ \dim_{\rm H} W(y,\psi)\
\le\ D_{\rm all}(\tau),\qquad
D_\bullet(\tau)=\sup\{s\in(0,1):F_\bullet(s)\ge\tau\}.
\tag{6}
\]
The upper endpoint is attained at \(y=0\), and the lower endpoint is attained for Haar-almost every \(y\). When the bases are pairwise coprime they agree for every \(y\). Each \(F_\bullet\) is continuous and strictly decreasing from \(+\infty\) to \(0\), so (6) can be solved by a scalar root search. Finite support for the underlying simultaneous estimates is used only through Paper #2.

**Optimization proof.** Given any blocks and \(d\ge s\), we can bound the total fractional reward by setting every \(t_i\) in a block equal to its \(T_A\). Maximize this larger linear reward for given ordered blocks subject to \(T_j\ge\max_{i\in A_j}\kappa_i\) and
\[
sT_j+\sum_{l<j}(T_l-\lambda_{A_l})\le\lambda_{A_j}
\qquad(j=1,\ldots,m).
\tag{7}
\]
In \(T\)-order, (7) is exactly (4) applied to prefixes and therefore equivalent to (4). Allowing any order in (7) introduces no spurious feasible points. For an adjacent inversion, the sum of losses through both already fits under \((1-s)\) times the smaller exponent. After swapping, the prefix through the smaller exponent has lower loss and the new later bound is weaker. Repeated swaps put the exponents in order. A tie is governed by the prefix including all tied blocks.

The maximum exists over finitely many compact polytopes, since each \(T_j\le\lambda_{A_j}/s\). Choose an optimizer with the fewest axes, then an optimizing vertex for that choice. A tight lower bound \(T_j=\max_{i\in A_j}\kappa_i\) would allow deletion of all its zero-rate axes, retaining the objective and decreasing losses because the gcd exponent can only increase. If the block disappears its nonnegative loss is removed. This contradicts minimality. Consequently all inequalities (7) are tight at the vertex. Their tight forms are exactly (5). The losses are positive, so \(T_j\) increases strictly and \(\lambda_{A_j}>T_{j-1}\) for \(j\ge2\). The candidate also has strict merger comparisons. If \(A_k,A_j\) are the first and last in a collection \(\mathcal C\) with \(k<j\), let \(R_l=\sum_{h\le l}(T_h-\lambda_{A_h})\), with \(R_0=0\). Then
\[
\lambda_{A_j}-\sum_{\substack{A_h\in\mathcal C\\h<j}}(T_h-\lambda_{A_h})
\ge sT_j+R_{k-1}>sT_k+R_{k-1}=\lambda_{A_k}
\ge\lambda_{\cup\mathcal C}.
\]
This is strict (2). At \(y=0\) take coincident roots in every block. For any target the singleton partition has no internal proximity test. On a subsequence with \(\rho_n\to\tau\), (3) now gives the lower bounds from these optima. Conversely (3) and (7) give the homogeneous upper bound at every target. A nonsingleton coprime block has \(\lambda_A=0\), so it precludes any positive dimension in (4).

For strict monotonicity, an optimizer at \(s_2\) remains feasible at any \(s_1<s_2\) after a sufficiently small increase in one largest \(T_j\). This strictly increases its reward. Compactness gives upper semicontinuity in \(s\). Moving all \(T_j\) down by a small common amount, possible at a minimal-axis optimizer, strictly improves (4) at positive \(s<1\) and changes its reward continuously. This gives lower semicontinuity. The one-grid candidate grows unboundedly at \(s\downarrow0\), and \(T_j-\kappa_i\le (1/s-1)\kappa_i\) gives the limit at \(s\uparrow1\).

**Almost every target.** At fixed positive fractional rates, a merger of any subset \(A\) of two or more axes strictly saves cost exactly when \(\sum_{i\in A\setminus\{h\}}t_i>\sum_{i\in A}\kappa_i-\lambda_A\), with \(h\) an index of maximum \(t_i\). For random independent Haar target coordinates, this event's proximity condition at level \(n\) has exponentially small probability. Project the physical window box to differences from \(h\), obtaining volume \(O(e^{-n\sum_{i\ne h}t_i})\). The projected grid has covolume \(\gcd_{i\in A}N_i/\prod_{i\in A}N_i\). This follows from keeping the pivot coordinate together with differences, a determinant-one change of variables whose kernel along the differences has grid period \(1/\gcd_{i\in A}N_i\). Uniform translated grid shifts push forward to Haar on the projected torus. The ratio of these volumes bounds the probability, and the first Borel–Cantelli lemma applies.

Apply this argument to every rational rate vector used in the finite meshes in §1 and every possible subset. Almost surely, an infinitely occurring rectangle has no strictly saving merger of its singletons. Reduce all its positive rates by a small common amount to break any ties in favor of the singletons, keeping the rates positive. The simultaneous dimension bound of Paper #2 now supplies the singleton value, with the original rates recovered by continuity (4). Thus in the mesh upper bound every candidate dimension is bounded by the singleton optimum at threshold \(\tau-\epsilon\sum_i\alpha_i+o(1)\). Sending \(\epsilon\downarrow0\) proves the lower endpoint in (6). The exceptional target set can be chosen independently of \(\psi\).

### Consequences of the recursion

- If every weight is \(\alpha\) and all blocks are singleton, write \(R=\sum_i r_i\) and \(T=\max_i(\kappa_i+r_i)\). Then \(R\le(1-s)T\le(1-s)(\max_i\kappa_i+R)\). Thus \(F_{\rm sing}(s)=\alpha\max_i\kappa_i(1-s)/s\), attained by the largest base. This yields dimension \(\alpha\max_i\kappa_i/(\tau+\alpha\max_i\kappa_i)\) for all shifts in coprime bases and almost every shift in arbitrary bases.
- For two starting rates \(\kappa_1<\kappa_2\), put \(q=(1-s)/s\). The singleton candidates are \(q\alpha_i\kappa_i\). The two-axis candidate when \(s>\kappa_1/\kappa_2\) is
  \[
  q\bigl(\alpha_1\kappa_1+\alpha_2\kappa_2-\alpha_2\kappa_1/s\bigr).
  \]
  It exceeds both singleton candidates exactly when additionally \(s>\alpha_2/\alpha_1\). For bases \((2,5)\), weights \((3,1)\), and \(\psi(n)=10^{-n}\), the dimension is exactly \(1/2\) at every target. At \(s=1/2\), the split \(r=(\log2,\log(5/4))\) has reward \(\log10\). Both single-coordinate dimensions are strictly less than \(1/2\).
- A merged block and a separate faster grid can add reward even with unit weights and three distinct bases. For \((81,162,6563)\), put \(a=\log81\), \(m=\log6563\), and use \(s=2/3\). The only nonsingleton block with positive gcd exponent is \(\{1,2\}\) with \(\lambda=a\). Pairing this block followed by \(\{3\}\) gives \(F_{\rm all}(2/3)=m/2+a/4-\log2=m/2+\log(3/2)\). The pair alone gives \(a-\log2<m/2\). All singleton possibilities give at most \(m/2\), and the reverse block order is infeasible by (5). At \(\tau=m/2+\log(3/2)\) the homogeneous dimension is therefore \(2/3\), strictly above both the almost-every-target dimension and the homogeneous answer for any proper subfamily.
- At sufficiently large \(\tau\), the homogeneous optimum is a single block. If \(\lambda_*\) is the smallest positive \(\lambda_A\), then for \(s\le\lambda_*/\max_i\kappa_i\) the first \(T_1=\lambda_{A_1}/s\) is already at least the largest starting exponent. No second \(\lambda_A>T_1\) exists. Taking \(\tau\) also large enough that \(T_A=(\tau+\sum_{i\in A}\alpha_i\kappa_i)/\sum_{i\in A}\alpha_i>\max_{i\in A}\kappa_i\) for all \(A\), the homogeneous formula becomes
  \[
  \max_{\varnothing\ne A\subseteq[k]}
  \frac{\lambda_A\sum_{i\in A}\alpha_i}
       {\tau+\sum_{i\in A}\alpha_i\kappa_i}.
  \]
  In particular the large-\(\tau\) coefficient of the dimension is \(\max_A\lambda_A\sum_{i\in A}\alpha_i\).
- If all bases equal \(b\), cluster the indices by their identical target value. For large \(n\) at a hit with \(\rho_n\) bounded below, one cluster has small errors and all other factors stay uniformly bounded below. Thus for every target and \(0<\tau<\infty\) the dimension is \(A_*\log b/(\tau+A_*\log b)\), where \(A_*\) is the largest total weight of a cluster. This also follows from (3).

## 3. Explicit two-base formula at every target

Order the bases so that \(\kappa_1\le\kappa_2\), put \(\lambda=\lambda_{\{1,2\}}\), and define the distance between the two translated root grids by
\[
\Delta_n=\frac{\|(N_2/G_n)y_1-(N_1/G_n)y_2\|}{\operatorname{lcm}(N_1,N_2)},\qquad
G_n=\gcd(N_1,N_2),\qquad
\xi_n=-\frac{\log\Delta_n}{n}.
\]
Thus \(\xi_n\ge\ell=\kappa_1+\kappa_2-\lambda\ge\kappa_2\), with \(\xi_n=\infty\) at a coincidence. For an extended joint cluster point \((\rho,\xi)\) of \((\rho_n,\xi_n)\) on the positive levels with finite \(\rho\), let \(T_*(\rho,\xi)\) be the smallest \(T\ge\kappa_2\) satisfying
\[
(\alpha_1+\alpha_2)T-\alpha_1\kappa_1-\alpha_2\kappa_2
-\min(\alpha_1,\alpha_2)(T-\xi)_+\ \ge\ \rho.
\tag{8}
\]
Its value is given by the two linear pieces on either side of \(\xi\), with the stated lower cutoff. For \(0<\tau<\infty\),
\[
\boxed{\displaystyle \dim_{\rm H}W(y,\psi)
=\max\!\left\{D_{\rm sing}(\tau),\
\sup_{(\rho,\xi)}\frac{\lambda}{T_*(\rho,\xi)}\right\}.}
\tag{9}
\]
An infinite first coordinate contributes zero. A joint limit is necessary for the phase term. If \(\rho_n\to\tau\), it is enough to use \(\rho=\tau\) and \(\xi=\limsup_n\xi_n\). [Paper #2, two-grid difference formula](paper/multibase-shrinking-targets.tex#L740)

The partitions in (3) are individual grids or the single pair. For the pair, its one compatibility requirement is \(\min(t_1,t_2)\le\xi\), and its dimension is \(\lambda/\max(t_1,t_2)\). Given \(T\ge\kappa_2\), the best reward uses exponent \(T\) on a stronger-weight axis and \(\min(T,\xi)\) on the other. These choices are feasible at nonnegative fractional rates because \(\xi\ge\kappa_2\), and give exactly (8). An exponent with zero fractional rate in this optimization is harmless. If only one fractional rate is positive, its individual grid gives dimension at least \(\lambda/T\) for that reward. All-positive rates are covered directly by (3). The singleton-partition answer in (9) follows from (5), which supplies strictly admissible optima even when the bases share primes.

When \(\xi=\ell\), the phase term cannot improve the baseline. Any split with \(\min t_i\le\ell\) has singleton terminal numerator \(\kappa_1+\kappa_2-\min t_i\ge\lambda\), and its first prefix ratio is at least \(\lambda/T\) as well. For distinct bases at common times and algebraic targets, a joint limit with \(\xi>\ell\) requires rational targets and exact phase coincidences along a further subsequence. Indeed, write \(U=N_2/G_n\), \(V=N_1/G_n\). If \(|u+Uy_1-Vy_2|\le e^{-\epsilon n}\) infinitely often for integers \(u\), the \(S\)-adic Subspace Theorem on \((u,U,V)\) produces a fixed rational relation on a subsequence. Use \(u+Uy_1-Vy_2,U,V\) at infinity and all coordinate forms at the radix primes, where the product is at most \(1/(UV)\). The relation has a nonzero coefficient of \(u\) since \(U/V\) is injective in \(n\). Eliminating \(u\) gives a small linear form with fixed coefficients in \(U,V\). These are distinct positive integer powers with exponentially different growth, so the coefficients must both vanish. For rational targets the nonzero phases are bounded away from zero by a common denominator. For a constant exponential rate, either there are infinitely many exact coincidences and the dimension is the homogeneous value, or it equals the singleton answer. For general \(\psi\), only the lower rate along the exact coincidences can contribute beyond the singleton value. [Paper #2, algebraic-target dichotomy](paper/multibase-shrinking-targets.tex#L1045) · [Schlickewei, \(S\)-adic Subspace Theorem](https://doi.org/10.1016/0022-314X(77)90073-7)

The phase can matter with unit weights. For \((4,8)\) and \(\psi(n)=16^{-n}\), the zero target gives the known dimension \(4/9\) from the aligned branch. The target \((0,1/2)\) has phase \(1/2\) at all levels, hence \(\xi=\ell\) and dimension \(3/7\). This gives a strict gap from the uniform shifted upper bound of \(4/9\).

### Target spectra in \((2,6)\)

Take weights \((3,1)\), \(\psi(n)=64^{-n}\), \(a=\log2\), \(b=\log6\), and fix \(y_2=4/9\). Formula (5) gives \(D_{\rm sing}=1/3\) since the two-singleton split is infeasible at \(s=1/3<a/b\). Here \(\xi_n=b-n^{-1}\log\|3^n y_1-y_2\|\). If \(\xi=\limsup\xi_n\), the dimension is
\[
\frac{3a}{9a+b-\xi}
\quad\text{for }b\le\xi\le (9a+b)/4,\qquad
\frac{4a}{9a+b}\quad\text{for }\xi\ge(9a+b)/4 .
\]
In particular the dimension ranges over the full interval \([1/3,4a/(9a+b)]\), with strictly different endpoints since \(6<8\).

To realize \(\xi=b+c\) for any \(c>0\), put \(11\,0^{L_j}\,2\) in the ternary digits of \(y_1\) starting at \(n_j+1\), with \(L_j\ge2\), very widely separated blocks, and all other digits zero. Choose \(L_j\log 3/n_j\to c\), allowing \(c=\infty\). At \(n_j\), the distance from \(4/9=0.11000\ldots_3\) is comparable to \(3^{-L_j}\). A fixed small neighborhood of \(4/9\) lies in the two adjacent three-digit cylinders \(110\) and \(102\). The first prefix appears only at the displayed starts and the second never occurs, so off the starts the phase is bounded away from zero. Use \(y_1=0\) for \(c=0\). This is a phase-exponent variant of the digit construction in Paper #2. For algebraic \(y_1\), only the bottom endpoint is possible at this \(y_2\): irrational algebraic targets have no strict phase gain, and a rational ternary orbit eventually has reduced denominator coprime to \(3\), so it cannot meet \(4/9\) infinitely. [Paper #2, bases two and six](paper/multibase-shrinking-targets.tex#L983)

This construction also shows why \(\tau\) alone cannot determine the all-target dimension. Choose \(c>(9a+b)/4-b\) and replace \(\psi(n_j)\) by \(e^{-n_j^2}\), leaving other levels unchanged. The lower order stays \(6a\), and the dimension drops from \(4a/(9a+b)\) to \(1/3\). The high-phase levels have infinite product rate in the joint limit, and every finite-rate limit has \(\xi=b\).

## 4. Primary-source comparison

- **Zhang–Lü (2021)** study the unweighted zero-target \((2,3)\) scalar product and obtain a Hausdorff-measure criterion. **Li–Li–Wu (2025)** give the exact homogeneous unweighted two-sequence dimension in greater generality. Their preprint Theorem 1.1 includes one term per grid and a gcd term in the critical series. For the two exponential sequences this specializes to \(\max\{\kappa_2/(\kappa_2+\tau),\,2\lambda/(\kappa_1+\kappa_2+\tau)\}\), including shared primes. Their scalar Hausdorff-measure dichotomy in Theorem 5.1 assumes both denominator sequences and the gcd sequence are lacunary, as for powers with a nontrivial gcd. Their Theorem 5.2 covers increasing fixed-prime denominator sequences with either bounded or increasing gcd. For coprime powers the gcd sequence is identically \(1\). Its term converges for every \(s>0\), so the lower half of the dichotomy follows from the divergent one-grid term and the one-grid law (5.2). [Zhang–Lü, Fractals 29, 2150102](https://doi.org/10.1142/S0218348X21501024) · [Li–Li–Wu, Nonlinearity 38, 065012](https://doi.org/10.1088/1361-6544/add833) · [Li–Li–Wu, accessible preprint, §5.1](https://arxiv.org/html/2409.18635v1#S5)
- **Lucas Tapia (2026 preprint)** treats the unweighted scalar product with arbitrary shifted integer denominators in Theorem 1, including level-dependent shifts. The convergence criterion gives the same upper bound as the preceding homogeneous formula when the denominators are powers. The dominant individual-grid term is matched by the shifted one-grid lower bound. Hence the exact unweighted inhomogeneous two-base dimension is already a consequence whenever the one-grid term dominates, including all coprime pairs and \((2,6)\). Theorem 2 and Corollary 3 also handle real denominators through upper bounds. Formula (9) computes the exact shifted value even when the gcd term can dominate, and allows unequal weights. [Tapia, Theorems 1–2 and Corollary 3](https://arxiv.org/html/2602.22512v1)
- **Li–Liao–Velani–Zorin (2023)** are the relevant \(abc\) comparison for the scalar **simultaneous maximum** in Eq. (75) and Remark 13, the problem addressed in Paper #2. Their standard toral shrinking-target theory also includes products with an ambient starting point. Yubin He's multiplicative beta-dynamical theorem treats \((x_1,\ldots,x_d)\) free in the ambient cube in definition (1.3), and Hussain–Simmons treat the ambient classical multiplicative Hausdorff-measure theorem. Wang–Wu's mass transference for rectangles supplies a general tool for ambient-dimensional problems. Bugeaud–Durand address approximation on the middle-third Cantor set. The classical and \(p\)-adic Littlewood problems use a different time and denominator constraint, including in the Badziahin–Bugeaud–Einsiedler–Kleinbock rigidity theorem. [Li–Liao–Velani–Zorin, §5.5](https://eprints.whiterose.ac.uk/id/eprint/217139/1/1-s2.0-S0001870823001378-main.pdf#page=68) · [He, beta-dynamical systems](https://arxiv.org/html/2411.16045v1) · [Hussain–Simmons](https://arxiv.org/abs/1612.00139) · [Wang–Wu](https://arxiv.org/abs/1909.00924) · [Bugeaud–Durand](https://arxiv.org/abs/1305.6501) · [Badziahin–Bugeaud–Einsiedler–Kleinbock](https://arxiv.org/abs/1405.5545)

The candidate new contributions are (3), the finite weighted optimization and extremal-target statements (5)–(7), and the sharp phase-dependent branch (8)–(9). These are unconditional consequences of the scalar simultaneous bounds in Paper #2 and the reductions above. The primary sources checked establish the narrower product cases detailed here. The published \(abc\) evidence concerns the simultaneous maximum. Priority for the remaining product results is subject to the scope of this search.
