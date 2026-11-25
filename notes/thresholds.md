# Run 43 · Two shrinking-target thresholds

| Problem | Earlier range | Result of this run |
|---|---|---|
| Synchronized \((x,x+d,x+d^2)\) for binary and ternary powers | Positive-dimensional gaps for \(\tau<1/7\); integer gaps only for \(\tau\ge\log_3 2\) | Positive-dimensional gaps for \(0<\tau<(1-\log_3 2)/2\); all gap sets have dimension zero at \(1/2\); only integers survive above \(1/2\). |
| One-base targets on \((x,x^2)\), equal exponents | The dimension formula for every target held up to \(\sqrt2-1\) | The formula holds throughout \(0\le\tau<1/2\), including all fixed and moving targets. Unequal widths are covered as well. |

These results extend [Run 36](run36-additive.md) and [Run 31](run31-parabola.md). The strict inequalities and the two distinct endpoint questions are specified below.

## Synchronized quadratic triples

Put \(a=\log_3 2\), \(N=2^n=M^a\), \(M=3^n\), and \(\delta=M^{-\tau}\). Let \(G_\tau(C)\) be the limsup of the gap tests
\[
\max\{\|Nd\|,\|Md\|,\|Nd^2\|,\|Md^2\|\}<C\delta.
\]
For fixed circle targets \(y=(y_1,y_2)\), a common hit means that each of \(t=x,x+d,x+d^2\) satisfies both \(\|Nt-y_1\|<\delta\) and \(\|Mt-y_2\|<\delta\) at the same level. Let \(S_\tau(y)\) consist of all gaps admitting a common hit infinitely often with some fixed \(x\). Here \(\|\cdot\|\) is distance to the nearest integer. In that definition \(x\) and \(d\) are fixed for the infinitely many common levels. With \(x\) prescribed, write \(S_\tau(y;x)\).

- For every \(y\), every \(0<\tau<(1-a)/2=0.184535\ldots\), and every two open intervals for \(x\) and \(d\), one can choose a single \(x\) in the first interval and a compact family of noninteger gaps in the second, all hitting with that \(x\) at a shared sequence of levels. The local Hausdorff dimension of \(S_\tau(y)\) is at least
  \[
  \frac{a-\tau}{1+\tau}.
  \]
  The same lower bound holds for \(S_\tau(y;x)\) whenever that prescribed \(x\) has infinitely many hits with the two scalar radii \(\delta/4\). In particular \(x=0\) works for \(y=0\).
- For every \(y\) and \(\tau>1/2\), only integer gaps are possible. At \(\tau=1/2\), the gap projection has Hausdorff dimension zero for every \(y\), including \(y=0\). For \(0<\tau\le1/2\) it has the upper bound
  \[
  \dim_{\rm H} S_\tau(y)\ \le\
  \frac{\min\{1-\tau,\,2-4\tau\}}{1+\tau}.
  \]
  These upper results hold for \(G_\tau(C)\) with every fixed \(C>0\).

The interval for the noninteger existence threshold thus narrows from \([1/7,a]\) to \([(1-a)/2,1/2]\), for the zero target and for the all-target guarantee. Neither endpoint is settled for noninteger existence. The endpoint statement at \(1/2\) settles dimension.

### Upper bound from an integer lattice

Write \(p,q,r,s\) for the nearest integers to \(Nd,Md,Nd^2,Md^2\). On any fixed bounded \(d\)-interval the gap tests give
\[
U=Mp-Nq=O(M\delta),\qquad A=p^2-Nr=O(N\delta),\qquad B=q^2-Ms=O(M\delta).
\]
The bounds on the squared residuals follow by factoring \(p^2-(Nd)^2\), or its ternary counterpart, and bounding \(d\) on the interval. Then \((X,A,B)=(U^2,A,B)\) belongs to the integer lattice
\[
\Lambda_n=\{(X,A,B)\in\mathbb Z^3:X\equiv M^2A\pmod N,\ X\equiv N^2B\pmod M\}.
\]

**Lattice claim.** For every \(\epsilon>0\), eventually the only lattice vector in the box
\[
|X|\le M^{1-\epsilon},\qquad |A|\le N M^{-1/2-\epsilon},\qquad |B|\le M^{1/2-\epsilon}
\tag{T1}
\]
is zero. The claim concerns all integer \(X\), irrespective of sign and square status.

Use the \(S\)-adic Subspace Theorem for the fixed set \(S=\{\infty,2,3\}\). For independent linear forms at each place, a product bounded by a negative power of the height confines the integral vectors to finitely many proper rational subspaces. Here the height of each displayed vector is \(O(M^3)\). For a primitive formulation divide by the integer gcd. The product cannot increase because \(\prod_{v\in S}|g|_v\ge1\) for any positive integer \(g\), and the height decreases. Products equal to zero directly give a fixed rational hyperplane. [Schlickewei, *The quantitative subspace theorem for number fields*](https://www.numdam.org/item/CM_1992__82_3_245_0/)

Suppose there are arbitrarily late nonzero vectors in (T1). If \(X=0\), the congruences force \(A=B=0\) by the size bounds and coprimality. If \(B=0\), then \(M\mid X\), hence \(X=0\). Split the remaining contradiction sequence into the two possible cases for \(A\).

If \(A\ne0\), use \((x_1,x_2,x_3)=(X,M^2A,N^2B)\), coordinate forms at infinity, \((x_1-x_2,x_2,x_3)\) at 2, and \((x_1-x_3,x_3,x_2)\) at 3. The congruences and divisibilities give
\[
\prod_{v\in S}\prod_{i=1}^3 |L_{i,v}(x)|_v
\le \frac{|X|\,|A|\,|B|}{NM}\le M^{-3\epsilon}.
\]
Indeed the factors at 2 are at most \(N^{-1},1,N^{-2}\), respectively, and at 3 they are at most \(M^{-1},1,M^{-2}\). Some fixed integer relation \(c_1X+c_2M^2A+c_3N^2B=0\) holds on a subsequence. Reducing modulo \(N\) and \(M\) gives
\[
N\mid(c_1+c_2)A,\qquad M\mid(c_1+c_3)B.
\]
Since \(0<|A|=o(N)\) and \(0<|B|=o(M)\), both coefficient sums must vanish. The resulting relation is \(X=M^2A+N^2B\), which gives
\[
|A|\le |X|/M^2 + N^2 |B|/M^2
\le M^{-1-\epsilon}+M^{2a-3/2-\epsilon}=o(1).
\]
Here \(2a<3/2\). This contradicts \(A\ne0\).

If \(A=0\) and \(B\ne0\), write \(X'=X/N\in\mathbb Z\). Then \(X'\equiv NB\pmod M\). Use \((x_1,x_2)=(X',NB)\), coordinate forms at infinity and at 2, and \((x_1-x_2,x_2)\) at 3. The product is at most
\[
\frac{|X|\,|B|}{NM}\le M^{1/2-a-2\epsilon},
\]
which decays exponentially since \(a>1/2\). A fixed relation \(c_1X'+c_2 NB=0\) reduces modulo \(M\) to \(M\mid(c_1+c_2)B\), forcing \(c_1+c_2=0\). Thus \(X=N^2B\), impossible because \(0<|B|\) and \(|X|\le M^{1-\epsilon}<N^2\). This proves (T1).

**Exclusion and packing.** When \(\tau>1/2\), choose \(0<\epsilon<\tau-1/2\). The size bounds for \(X=U^2,A,B\) fit inside (T1) for all large \(n\), uniformly on the bounded interval. Thus \(U=0\), so \(p=Nj,q=Mj\) for an integer \(j\). Each such hit has \(|d-j|<C\delta/M\). A fixed gap with infinitely many hits is therefore integral.

For \(\tau\le1/2\), cover the original box of size \(O(M^{2-2\tau},NM^{-\tau},M^{1-\tau})\) by boxes of side lengths as in (T1). Differences of two lattice points in one such box would belong to (T1), so each box contains at most one. The number of lattice points is \(O_\epsilon(M^{2-4\tau+3\epsilon})\). Each \(X=U^2\) determines at most two values of \(U\); each \(U\) determines \((p,q)\) up to integer translations of \(d\), by coprimality. On a fixed bounded interval each pair contributes an interval of length \(O(\delta/M)\) from the ternary linear test. Summing powers of these lengths and taking \(\epsilon\downarrow0\) gives the claimed \( (2-4\tau)/(1+\tau)\) upper bound, including dimension zero at equality. Counting the integer \(U\)'s directly gives the additional \((1-\tau)/(1+\tau)\) bound. These covers extend to \(\mathbb R\) by exhaustion.

### Lower bound by avoiding rational stationary points

Fix a bounded gap interval \(I\) and parameters
\[
\tau<\eta<(1-a)/2,\qquad
2\eta<\lambda<\min(1-a,(a+\eta)/2),\qquad
2\eta<\beta<a-\lambda+\eta.
\]
These intervals are nonempty because \((1-a)/2<a/3\). Put \(H=\lfloor M^\eta\rfloor\), \(\rho=M^{-\lambda}\), and \(R=M^{-\beta}\). In \(I\), exclude points within \(2R\) of a hole of radius \(K\rho H/b\) about any rational \(r/b\) with integer \(1\le b\le2H\), for a sufficiently large constant \(K\) depending on \(I\). For each \(b\), there are \(O_I(b)\) relevant numerators on a fixed enlargement of \(I\). The total excluded length is \(O_I((\rho+R)H^2)=o(1)\). In the middle half of any fixed parent interval \(J\subset I\), the retained points therefore have measure \(\gg |J|\) at every sufficiently late level. The required level may depend on \(J\).

About each retained point \(t\) use a translated nonnegative smooth bump \(\chi\) of width \(R\), supported on \([t-R,t+R]\), with integral \(\asymp R\) and \(\|\chi^{(j)}\|_\infty\ll_j R^{-j}\). Every point of its support is outside the rational holes. To obtain a gap hit in this support, integrate
\[
 \chi(d) f(Nd)f(Md)f(Nd^2)f(Md^2)
\]
over \(d\), where \(f\) is the periodization of a nonnegative smooth bump rescaled to \((-\delta/8,\delta/8)\), with \(\widehat f(0)\asymp\delta\). The Fourier coefficients satisfy \(|\widehat f(k)|\ll_L\delta(1+\delta|k|)^{-L}\). Their absolute sum is \(O(1)\), and truncation at \(H\) costs \(O_D(RM^{-D})\) for any fixed \(D\), since \(\eta>\tau\). The zero term has size \(\asymp R\delta^4\).

The other phases are \(\phi(d)=(Nu+Mv)d+(Nw+Mz)d^2\), with all indices bounded by \(H\). Let \(D_1\) bound \(|\phi'|\) below on the bump, and \(D_2\) bound \(|\phi''|\) above.

| Frequency case | Derivative bounds | Reason |
|---|---|---|
| \(z\ne0\) | \(D_1\gg M\rho H,\ D_2\ll MH\) | The hole at \(-v/(2z)\) gives \(M\lvert v+2zd\rvert\gg K M\rho H\). The remaining derivative is \(O_I(NH)\), and \(M\rho/N\to\infty\). |
| \(z=0,\ v\ne0\) | \(D_1\gg M,\ D_2\ll NH\) | \(NH=o(M)\). |
| \(z=v=0,\ w\ne0\) | \(D_1\gg N\rho H,\ D_2\ll NH\) | Use the hole at \(-u/(2w)\). |
| \(z=v=w=0,\ u\ne0\) | \(D_1\ge N,\ D_2=0\) | The phase is linear. |

For the binary quadratic modes \(RD_1\gg M^{a-\lambda+\eta-\beta}\) and \(D_1^2/D_2\gg M^{a-2\lambda+\eta}\). Both exponents are positive. The other cases also have power savings: in the first row replace \(a\) by \(1\) in the two exponents, in the second use \(RM\) and \(M^2/(NH)\), and for the linear phase use \(RN\to\infty\) with \(\beta<a\). Iterating integration by parts \(k\) times bounds each integral by
\[
 O_k\!\left(R\big[(RD_1)^{-1}+D_2/D_1^2\big]^k\right).
\]
Indeed the terms have the form of a constant times \(\chi^{(j)}(\phi'')^{k-j}/(\phi')^{2k-j}\), \(0\le j\le k\), since the phase is quadratic. The frequency coefficients have bounded absolute sum. Taking \(k,D\) sufficiently large makes the total error \(o(R\delta^4)\), uniformly in the retained point. Positivity yields all four gap tests with strict tolerance \(\delta/8\) within distance \(R\) of that point.

### A compact gap family for one common center

Fix any infinite subsequence of levels and any initial gap interval, choosing a closed subinterval free of integers. Given finitely many parent intervals, take a common level of the subsequence so late that the middle half of each parent \(J\) contains a set of retained points of measure \(\gg |J|\), and \(R\ll |J|\). A maximal \(5R\)-separated set of these points has \(\gg |J|/R\) elements. Moving each by at most \(R\) to an inner hit leaves separation at least \(3R\). Keep a closed child interval of radius \(c_I\delta/M\) at each hit, with \(c_I>0\) small enough that the four tests hold strictly with tolerance \(\delta/4\) throughout. This follows by the derivative bounds for the four functions on the enlarged \(I\). Each child lies inside its parent.

Give each child an equal share of its parent's mass \(P\). For any \(s<\beta/(1+\tau)\) with \(s>0\), choose the next level so late that \(O(PR/|J|)\) is at most the child length to the power \(s\), simultaneously for the finitely many parents. This is possible because \(R=M^{-\beta}\). For a test interval of length \(\ell\) between child and parent lengths, at most \(O(1)\) parents contribute. If \(\ell\ge R\), separation bounds the number of contributing children per parent by \(O(\ell/R)\), and the mass is \(O(P\ell/|J|)=O(\ell^s)\) from \(P\ll|J|^s\). If \(\ell<R\), only \(O(1)\) children contribute, each of mass \(O(\ell^s)\). This proves the Frostman bound on the compact limit set. Every gap in it hits at every selected stage. Taking \(\lambda\downarrow2\eta\), \(\beta\) arbitrarily close to \(a-\eta\) from below, and then \(\eta\downarrow\tau\), proves the dimension lower bound \((a-\tau)/(1+\tau)\).

Write \(h=(1-\tau)/(1+\tau)\) for \(0<\tau<1\). The binary–ternary diagonal theorem in Paper 2 supplies the local scalar dimension \(h\) with both radii \(\delta/4\), even on a prescribed infinite subsequence. For every \(d\in G_\tau(1/4)\), use the levels witnessing \(d\) and take inner scalar \(x\)-hits there. The triangle inequality gives all three original point hits, and the fiber of such a fixed \(d\) in \(x\) has dimension \(h\), since \(x\) itself must lie in the scalar limsup. Conversely, for any prescribed \(x\) with infinitely many inner scalar hits, choose that infinite subsequence first and use the compact gap construction there. This proves the single-\(x\) assertion for arbitrary \(y\) by choosing an inner scalar \(x\) in the desired open interval. For \(y=0\), a prescribed integer \(x\) has all levels available and \(S_\tau(0;x)=G_\tau(1)\). For all \(y\), the inclusion \(S_\tau(y)\subset G_\tau(2)\) follows by subtracting the residual of \(x\) from those of \(x+d,x+d^2\) at each common hit. Thus the arithmetic upper result holds with arbitrary target and even varying center at the finite-level stage. [Binary–ternary diagonal theorem and its subsequence construction](paper/multibase-shrinking-targets.tex)


### What remains open for triples

At \(\tau=(1-a)/2\), Fourier truncation needs \(\eta>\tau\), while the hole estimate needs \(2\eta<\lambda<1-a\). These conditions cease to overlap. At \(\tau=1/2\), the lattice estimate gives subpower growth of the candidate count per level; recurrence at a fixed noninteger gap is still undecided. Between these endpoints the critical rate and the exact dimension of the gap projection remain open here. The one-denominator parabola counts of Huang and of Huang–Li provide related arithmetic context. [Huang](https://arxiv.org/abs/1802.00525) · [Huang–Li](https://arxiv.org/abs/1902.06047)

## Uniform one-base targets on the parabola

Let \(q=B^n\), with integer \(B\ge2\). At each level take arbitrary real shifts \(y_{1,n},y_{2,n}\) and widths \(r_{i,n}\asymp q^{-1-\tau_i}\), where \(\tau_i\ge0\) and the comparison constants are uniform in \(n\). Write \(\tau=\min_i\tau_i\) and \(\sigma=\max_i\tau_i\). Consider the limsup of the level sets
\[
 |x-(a+y_{1,n})/q|<r_{1,n},\qquad
 |x^2-(b+y_{2,n})/q|<r_{2,n},\qquad a,b\in\mathbb Z.
\]
For every \(0\le\tau<1/2\), its Hausdorff dimension in every nonempty open interval of \((0,\infty)\) is
\[
 \frac{1-\tau}{1+\sigma}.
\]
The graph version has the same local dimension. With \(\sigma=\tau\) this closes the full \((\sqrt2-1,1/2)\) gap of Run 31, uniformly for fixed or moving shifts. The statement also holds with right-sided windows. At each level, recenter those windows by replacing \(y_{i,n}\) by \(y_{i,n}+qr_{i,n}/2\) and \(r_{i,n}\) by \(r_{i,n}/2\). The possible endpoint differences over all levels form a countable set.

### A frequency mean square on any index interval

Set \(e(t)=e^{2\pi i t}\). For any integer \(q\ge2\), any block \(\mathcal I\) of \(1\le P\le q\) consecutive integers, and any \(y\in\mathbb R\), put
\[
 S_h=\sum_{a\in\mathcal I} e\!\left(\frac{h(a+y)^2}{q}\right).
\]
For each \(\epsilon>0\), uniformly for \(1\le H\le q\),
\[
 \sum_{h=1}^{H}|S_h|^2\ll_\epsilon q^\epsilon(HP+q). \tag{P1}
\]
Expanding \(|S_h|^2\), group the terms by the index difference \(d\). For \(1\le d<P\) the resulting geometric sum has ratio \(e(2hd/q)\), since
\[
 (a+d+y)^2-(a+y)^2=2da+2dy+d^2.
\]
Thus \(|S_h|^2\le P+2\sum_{1\le d<P} W(hd)\), where
\[
 W(m)=\min\!\left(P,\|2m/q\|^{-1}\right)
\]
and \(W(m)=P\) when \(\|2m/q\|=0\). Here \(\|t\|\) is distance to the nearest integer. The function \(W\) has period \(q\). In one period the zero residue occurs at most twice and every nonzero residue of \(2m\bmod q\) occurs at most twice. Summing the reciprocals therefore costs \(O(P+q\log(2q))\). Each \(1\le m\le HP\le q^2\) has at most \(O_\epsilon(q^{\epsilon/2})\) factorizations \(m=hd\), by the elementary divisor bound. Consequently
\[
 \sum_{h\le H}\sum_{1\le d<P} W(hd)
 \ll_\epsilon q^{\epsilon/2}(HP/q+1)q\log(2q),
\]
which proves (P1).

Let \(N_{\mathcal I}(\delta)\) count \(a\in\mathcal I\) with
\(\|(a+y)^2/q-z\|<\delta\). For \(q^{-1/2}\le\delta\le1/4\), (P1) implies
\[
 P\delta-O_\epsilon\!\left(q^\epsilon(\sqrt P+\sqrt{q\delta})\right)
 \ \le\ N_{\mathcal I}(\delta)\
 \ll_\epsilon P\delta+q^\epsilon(\sqrt P+\sqrt{q\delta}). \tag{P2}
\]
To see this directly, use the periodic triangular function
\(\psi_\delta(t)=(1-\|t\|/\delta)_+\). The indicator lies between \(\psi_\delta\) and \(2\psi_{2\delta}\). The Fourier coefficients of \(\psi_\delta\) are \(\delta\) at zero and \(\delta(\sin(\pi h\delta)/(\pi h\delta))^2\) at \(h\ne0\). Cauchy–Schwarz and (P1) bound \(\sum_{L\le h<2L,\,h\le q}|S_h|\) by \(O_\epsilon(q^\epsilon(L\sqrt P+\sqrt{Lq}))\). Multiply by \(O(\min(\delta,1/(\delta L^2)))\) and sum over dyadic \(L\). The geometric sums on either side of \(L\asymp\delta^{-1}\) give \(O_\epsilon(q^\epsilon(\sqrt P+\sqrt{q\delta}))\). The \(h>q\) tail is \(O(P/(q\delta))=O(\sqrt P)\). The same estimates apply to \(2\delta\), and negative frequencies contribute the same bound. The constants do not depend on \(y,z\) or the index block. Both (P1) and (P2) hold for arbitrary integer moduli.

### From local counts to dimension

Fix a compact parameter interval \(I\subset(0,\infty)\) with nonempty interior, inside a slightly larger compact interval. Set \(A=1-\tau\), \(U=1+\sigma\), and suppress the level subscripts on the shifts and widths. Write \(x_a=(a+y_1)/q\). A hit in \(I\) implies
\[
 \left\|q x_a^2-y_2\right\|\le C_I q^{-\tau},
\]
because \(q|x^2-x_a^2|\ll_I q r_1\) and \(q|x^2-(b+y_2)/q|<q r_2\). Each such \(a\) yields \(O_I(1)\) possible \(b\), and each overlap in \(I\) has length \(O_I(q^{-U})\), using the derivative lower bound for \(x^2\).

For the lower bound, take \(c>0\) sufficiently small and select all indices \(a\) with \(x_a\in I\) and \(\|q x_a^2-y_2\|<c q^{-\tau}\). Choose \(c<1/4\) so there is at most one matching \(b\). The positive second-coordinate center \(x_b=\sqrt{(b+y_2)/q}\) satisfies \(|x_b-x_a|\ll_I c q^{-1-\tau}\). Center a closed ball of radius \(\rho_q=c_0q^{-U}\) at \(x_a\) if \(r_1\le r_2\), or at \(x_b\) if \(r_2<r_1\). The lower bounds on the widths and the upper and lower derivative bounds allow \(c,c_0>0\) to be chosen so that every ball lies strictly in both windows. They can also be chosen so that the displacement from \(x_a\) is at most \(1/(10q)\) and the balls are separated by \(\gg q^{-1}\). These choices work also for \(\tau=0\).

For \(0<\tau<1/2\), taking the outer tolerance in (P2) gives \(O_I(q^A)\) hits at each large level. To apply it on the entire compact interval, split the index range into \(O_I(1)\) blocks of length at most \(q\). For \(\tau=0\), the plain grid bound gives the same upper count. At each large level, every fixed subinterval \(J\) in the interior of \(I\) contains \(\gg_I |J|q^A\) selected balls. Apply the lower estimate of (P2) to the indices in the middle of \(J\), in blocks of length at most \(q\), with the inner tolerance \(c q^{-\tau}\). Its main term has size \(|J|q^A\) and for a fixed \(J\) the error is \(O_{I,\epsilon}(q^{1/2+\epsilon})=o(q^A)\) when \(\epsilon<1/2-\tau\). The small displacement and ball radius keep these balls in \(J\). The constants are uniform in the targets and the threshold level may depend on \(J\). Covering the limsup by the outer overlaps gives the upper dimension \(A/U\) since \(q=B^n\).

For a test interval of length \(q^{-1}\le\ell\le1\), let \(F_q\) be the number of selected balls meeting it, divided by \(q^A\). The displacement and radii enlarge the corresponding index range only to \(O(q\ell+1)\) integers. By (P2) and the sampling grid, respectively, for \(0<\tau<1/2\),
\[
 F_q\ll_\epsilon
 \min\!\left(\ell+q^{-(g-\epsilon)}\ell^{1/2}
                  +q^{-(A/2-\epsilon)},\ \ell q^\tau+q^{-A}\right),
 \qquad g=1/2-\tau. \tag{P3}
\]
At \(\rho_q\le\ell<q^{-1}\), separation gives \(F_q\ll q^{-A}\).

Choose \(0<\epsilon<\min(g,A/2)\), write \(b=A/2-\epsilon\), and take \(0<\eta<\min(1,b,2(g-\epsilon))\). Equation (P3) gives \(F_q\ll\ell\) for \(\ell\ge q^{-\eta}\). For the other scales, \(\ell\ge q^{-1}\) implies \(q^{-(g-\epsilon)}\ell^{1/2}\le \ell^{A-\epsilon}\). In addition
\[
 \min(q^{-b},\ell q^\tau)\le \ell^{b/(b+\tau)},\qquad
 q^{-A}\ll \ell^{A/U}\quad(\ell\ge\rho_q).
\]
Apply the minimum in (P3) to interpolate the term \(q^{-b}\) against \(\ell q^\tau\), keeping the other three terms. Therefore \(F_q\ll_\epsilon\ell^{s_0}\) throughout \(\rho_q\le\ell\le1\), where
\[
 s_0=\min\!\left(A-\epsilon,\frac{b}{b+\tau},\frac{A}{U}\right).
\]
As \(\epsilon\downarrow0\), this tends to \(A/U\), since \( (A/2)/(A/2+\tau)=A/(1+\tau)\ge A/U\). For \(\tau=0\) the grid alone gives the corresponding two bounds with \(s_0=1/U\) and any \(0<\eta<1\).

For completeness, choose \(0<s<s_0\) and construct a Cantor set by taking successively larger levels. Each parent of radius \(R\) has at least \(c_I Rq^A\) children in its middle half for every sufficiently large new \(q\), by the lower count, and there are only finitely many parents to check at each stage. Split parent mass equally. At each new level take \(q\) large enough that \(c_I^{-1}R^{s-1}q^{-A}\le\rho_q^s\) and \(R^{s-1}q^{-\eta(s_0-s)}\le1\). The first inequality is possible since \(sU<A\) and ensures each parent at every stage has mass at most a constant times \(R^s\). For an interval of length \(\rho_q\le\ell<R\), only \(O(1)\) parents of radius \(R\) can meet it by separation. The mass from each parent is bounded by a constant times \(R^{s-1}F_q\). For \(\ell\ge q^{-\eta}\) this is \(O(R^{s-1}\ell)=O(\ell^s)\). For \(\ell<q^{-\eta}\), it is \(O(R^{s-1}\ell^{s_0})=O(\ell^s)\) by the second choice of \(q\). Every sufficiently small \(\ell\) belongs to one such range of successive radii, giving the Frostman bound. The Cantor set lies in the limsup, and \(s\uparrow s_0\) and then \(\epsilon\downarrow0\) give the stated lower dimension.

### Sharpness and endpoint scope

- The local upper estimate needs its \(\sqrt{q\delta}\) term, up to subpower factors. For \(y=z=0\), write \(a=q+d\). Every \(|d|<\sqrt{q\delta}\) contributes because \((q+d)^2/q=q+2d+d^2/q\). For \(P\asymp\sqrt{q\delta}\) and \(\delta\asymp q^{-\tau}\) with \(0<\tau<1/2\), this is larger by a power than \(P\delta+q^\epsilon\sqrt P\) for small enough \(\epsilon\). These centers occupy a parameter interval of length \(\asymp q^{-(1+\tau)/2}\). Their count divided by \(q^A\) is \(\asymp q^{-A/2}\), the power used in the interpolation.
- Equation (P2) gives macroscopic lower counts for \(\tau<1/2\). At \(\tau=1/2\) the \(\sqrt P\) scale is comparable to the main term when \(P\asymp q\). The mean-square scale \(HP\) in (P1) is attained for complete homogeneous sums with \(P=q=B^n\) and \(H\asymp \sqrt q\). For each \(h\) coprime to \(q\), complete differencing gives \(|S_h|^2=q\) if \(q\) is odd, and \(2q\) if \(4\mid q\). Such \(h\) are a positive proportion of this frequency range for fixed \(B\). This explains the endpoint limit of this absolute-value argument. The theorem asserts no uniform lower bound at \(\tau=1/2\).
- For \(\tau>1/2\) the claimed all-target formula would be false. Take the zero target and \(D_n=B^{\lfloor n/2\rfloor}\). Each point on the mesh \(D_n^{-1}\mathbb Z\) is an exact center because \(D_n^2\mid q\). Inner balls of radius \(\asymp q^{-U}\) around these points give dimension at least \(1/(2U)>A/U\). Indeed for \(0<s<1/(2U)\), the balls inflated to radius \(\asymp q^{-sU}\) cover every compact interior interval at all sufficiently late levels, and the Mass Transference Principle applies. [Beresnevich–Velani, Theorem 2](https://annals.math.princeton.edu/wp-content/uploads/annals-v164-n3-p06.pdf)

